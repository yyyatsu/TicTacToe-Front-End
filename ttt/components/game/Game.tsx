//Done

import React from 'react';
import { View } from 'react-native';

import Board from '../board/Board';
import MatchupField from '../matchup-field/MatchupField';
import GameProps from './GameProps';
import GameStyle from './GameStyle';

const Game = ({boardSize, onPress, roomInformation, values, statuses}: GameProps): JSX.Element =>
{
  return (
    <View style = {GameStyle.container}>

      <MatchupField roomInformation = {roomInformation}/>
    
      <Board
        size = {boardSize}
        values = {values}
        onPress = {onPress}
        statuses = {statuses}
      />
    </View>
  );
};

export default Game;