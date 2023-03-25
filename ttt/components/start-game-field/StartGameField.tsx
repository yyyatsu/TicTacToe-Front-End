//Almost donee

import { useState } from "react";
import { View, TouchableOpacity, Text } from "react-native"

import { HttpStatusCode } from "axios";
import { useAsyncEffect } from "use-async-effect";

import StartGameFieldProps from "./StartGameFieldProps";
import StartGameFieldStyle from "./StartGameFieldStyle";

import AuthentificationManager from "../../management/authentification-manager/AuthentificationManager";
import RoomService from "../../services/room-service/RoomService";
import Input from "../input/Input";

const { container, button, text} = StartGameFieldStyle;

const StartGameField = ({navigation}: StartGameFieldProps): JSX.Element =>
{
  const [userName, setUserName] = useState('');
  const [roomName, setRoomName] = useState('');
  const [size, setSize] = useState('1');

  const [buttonText, setButtonText] = useState<string>('Create');

  useAsyncEffect(async () =>
  {
    const userName = await AuthentificationManager.getUserName();
    setUserName(userName!);
  }, []);

  useAsyncEffect(async () =>
  {
    if (roomName)
    {
      const result = await RoomService.getIsRoomExisting(roomName);
      if (result.status === HttpStatusCode.Ok)
      {
        if(result.data != 0)
        {
          setSize(result.data);
        }
        setButtonText(result.data? 'Join' : 'Create');
      }
    }

  }, [roomName]);

  const startGame = (): void =>
  {
    const connection = {userName: userName, roomName: roomName}
    const boardSize = parseInt(size, 10);
    navigation.navigate('Lobby', {connection, boardSize});
  };

  return (
    <View style = {container}>
      <Input
        onChangeText = {setRoomName}
        value = {roomName}
        placeholder = 'Room name'
      />

      {buttonText === 'Create' &&
        <Input
          onChangeText = {setSize}
          value = {size}
          placeholder = 'Board size'
        />
      }

      <TouchableOpacity
        style = {button}
        onPress = {startGame}
      >
        <Text style = {text}>
          {buttonText}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default StartGameField;