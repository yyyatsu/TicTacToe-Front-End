//Done

import { View } from 'react-native';
import VersusFieldStyle from './VersusFieldStyle';
import MiniProfile from '../mini-profile/MiniProfile';
import VersusFieldProps from './VersusFieldProps';

const {container} = VersusFieldStyle;

const VersusField = ({userName, opponentName}: VersusFieldProps): JSX.Element =>
{
  return (
    <View style = {container}>
      <MiniProfile name = {userName}/>
      <MiniProfile name = {opponentName}/>
    </View>
  )
};

export default VersusField;