//Done

import { View, Text } from 'react-native';
import VersusField from '../versus-field/VersusField';
import MatchupFieldProps from './MatchupFieldProps';
import MatchupFieldStyle from './MatchupFieldStyle';

const {container, text} = MatchupFieldStyle;

const MatchupField = ({roomInformation}: MatchupFieldProps): JSX.Element =>
{
  
  const {roomName, userName, opponentName} = roomInformation;

  return(
    <View style = {container}>
      <Text style = {text}>
        {roomName}
      </Text>

      <VersusField 
        userName = {userName} 
        opponentName = {opponentName}
      />
    </View>
  )
};

export default MatchupField;