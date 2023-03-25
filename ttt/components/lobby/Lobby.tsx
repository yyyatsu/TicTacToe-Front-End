//Redone

import { useEffect, useState, useRef } from 'react';
import { View } from 'react-native';

import { HubConnection, HubConnectionBuilder, LogLevel } from '@microsoft/signalr';

import LobbyProps from './LobbyProps';

import ApiRoutes from '../../api-service/ApiRoutes';
import StatusType from '../../enums/StatusType';
import Connection from '../../types/Connection';
import Game from '../game/Game';
import StartGameInformation from '../../types/StartGameInformation';
import Indicator from '../indicator/Indicator';
import GameResultPopup from '../game-result-popup/GameResultPopup';
import GameResultType from '../../enums/GameResultType';
import LobbyStyle from './LobbyStyle';
import generateCombinations from './generateCombinations';



const {container} = LobbyStyle;

const Lobby = ({route, navigation}: LobbyProps): JSX.Element =>
{
  const {connection, boardSize} = route.params;
  const {userName, roomName} = connection;

  const [lines, setLines] = useState<Array<number[]>>();

  const [hubConnection, setHubConnection] = useState<HubConnection>();
  const hubConnectionRef = useRef(hubConnection);

  const [values, setValues] = useState(Array(boardSize*boardSize).fill(''));
  const [statuses, setStatuses] = useState(Array(boardSize*boardSize).fill(StatusType.Standart));

  const [gameResult, setGameResult] = useState(GameResultType.Unknown);
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  
  const [symbol, setSymbol] = useState('');
  const [isPlayerTurn, setIsPlayerTurn] = useState(false);
  const [opponentName, setOpponentName] = useState('');

  useEffect(() => 
  { 
    connectToLobby();
    setLines(generateCombinations(boardSize));

    return () =>
    {
      hubConnectionRef.current!.stop()
    }
  }, []);

  const connectToLobby = async (): Promise<void> =>
  {
    try
    {
      const hubConnection: HubConnection = new HubConnectionBuilder()
      .withUrl(ApiRoutes.getLobbyUrl())
      .configureLogging(LogLevel.Information)
      .build();

      hubConnection.on('ReceiveStartGameInformation', handleStartGameInformationReceiving);

      hubConnection.on('ReceiveMove', handleMoveReceiving);

      hubConnection.on("ReceiveGameResult", handleGameResultReceiving);

      hubConnection.onclose(handleConnectionClosing);

      await hubConnection.start();
      setHubConnection(hubConnection);
    }
    catch (e)
    {
      console.error(e);
    }
  };

  const handleStartGameInformationReceiving = (gameInformation: StartGameInformation): void => 
  {
    setIsPlayerTurn(gameInformation.turn);
    setSymbol(gameInformation.symbol);
    setOpponentName(gameInformation.opponentName);
  };

  const handleMoveReceiving = (fields: Array<string>): void =>
  {
    setValues(fields);
    setIsPlayerTurn(true);
  };

  const handleGameResultReceiving = (line: Array<number>, result:string) =>
  {
    const isWin = result === 'Win';
    const status = isWin ? StatusType.Win : StatusType.Lose;
    const gameResult = isWin ? GameResultType.Win : GameResultType.Lose;

    setGameResult(gameResult);
    if (result !== 'Draw')
    {
      changeFieldsColor(line, status);
    }
    setIsPopupVisible(true);
  };

  const changeFieldsColor = (line: Array<number>, status: StatusType): void =>
  {
    let newStatuses: Array<StatusType> = [...statuses];

    line.forEach(l => newStatuses[l] = status);

    setStatuses(newStatuses);
  };

  const handleConnectionClosing = (): void =>
  {
    setHubConnection(undefined);
  };

  useEffect(() =>
  {
    joinRoom({userName, roomName}, boardSize);
    hubConnectionRef.current = hubConnection;
  }, [hubConnection]);

  const joinRoom = async (connection: Connection, boardSize: number): Promise<void> =>
  {
    try
    {
      await hubConnection?.invoke('JoinRoom', connection, boardSize);
    }
    catch (e)
    {
      console.error(e);
    }
  };

  useEffect(() => 
  { 
    checkWin();
  }, [values]);

  const checkWin = (): void =>
  {
    if (valuesIsFilled())
    {
      sendGameResult();
    }

    else
    {
      if(lines)
      {
        for (const line of lines) 
        {
          if (isWinningLine(line)) 
          {
            sendGameResult(line)
          }
        }
      }    
    }
  };

  const sendGameResult = (line?: Array<number>): void =>
  {
    hubConnection?.invoke('SendGameResult', line);
  };

  const valuesIsFilled = (): boolean => 
  {
    return values.every(v => v);
  };

  const isWinningLine = (line: Array<number>) => 
  {
    let checks = [];
    for (const i of line)
    {
      checks.push(values[line[0]] && values[line[0]] === values[i])
    }
    return checks.every(b => b);
  };

  const onPress = (index: number): void =>
  {
    if(isPlayerTurn && !values[index] && gameResult == GameResultType.Unknown)
    {
      const newValues = [...values];
      newValues[index] = symbol;
      setValues(newValues);
      sendMove(newValues);
      setIsPlayerTurn(false);     
    };
  };

  const sendMove = (fields: Array<string>): void =>
  {
    hubConnection?.invoke('SendMove', fields);
  };

  const goBack = (): void =>
  {
    navigation.goBack();
  };

  return (
    <View style = {container}>
      {symbol ? 
        <Game
          boardSize = {boardSize}
          values = {values}
          onPress = {onPress}
          statuses = {statuses}
          roomInformation = 
          {
            {
              userName:userName,
              opponentName:opponentName, 
              roomName:roomName
            }
          }
        />
        :
        <Indicator 
          onPress = {() => goBack}
        />
      }

      <GameResultPopup 
        visible={isPopupVisible} 
        onClose={() => setIsPopupVisible(false)}
        gameResult = {gameResult}  
      />
    </View>
  );
};

export default Lobby;