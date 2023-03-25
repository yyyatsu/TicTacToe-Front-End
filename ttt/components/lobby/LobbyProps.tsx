//Done

import { NavigationProp } from '@react-navigation/native';

import Connection from '../../types/Connection';
import { GameStackParametersList } from '../navigation/game-tabs/GameTabs';

interface LobbyProps 
{
  route: {
    params: {
        connection: Connection,
        boardSize: number,
    },
  },
  navigation: NavigationProp<GameStackParametersList, 'Lobby'>,
};

export default LobbyProps;