//Done

import { View } from 'react-native';

import Field from '../field/Field';
import BoardProps from './BoardProps';
import BoardStyle from './BoardStyle';

const {container, row} = BoardStyle;

const Board = ({size, values, statuses, onPress}: BoardProps): JSX.Element =>
{
  const renderField = (index: number): JSX.Element =>
  {
    return (
      <Field
        key = {index}
        onPress = {() => onPress(index)}
        value = {values[index]}
        status = {statuses[index]}
      />
    )
  };

  const renderRow = (position: number): JSX.Element =>
  {
    let rows = [];

    for (let i = position; i < position + size; i++)
    {
      rows.push(renderField(i));
    }

    return (
      <View style = {row} key = {position}>
        {rows}
      </View>
    );
  };

  let board = [];

  for(let i = 0; i < size*size; i+=size)
  {
    board.push(renderRow(i))
  }

  return (
    <View style = {container}>
     {board}
    </View>
  )
}

export default Board;