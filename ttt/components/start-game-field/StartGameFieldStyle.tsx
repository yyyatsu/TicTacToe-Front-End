//Done

import { StyleSheet } from 'react-native';

const StartGameFieldStyle = StyleSheet.create
(
  {
    container:
    {
      display: 'flex',
      width:330,
      top:'40%',
      alignSelf:'center'
    },

    button:
    {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: 300,
      height: 60,
      backgroundColor: '#5C8BE8',
      borderRadius: 10,
      alignSelf: 'center',
      marginVertical: 22,
    },

    text:
    {
      fontStyle: 'normal',
      fontSize: 16,
      display: 'flex',
      color: 'white'
    }
  },
);

export default StartGameFieldStyle;