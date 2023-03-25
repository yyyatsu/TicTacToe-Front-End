//Done

import { StyleSheet } from 'react-native';

const IndicatorStyle = StyleSheet.create
(
  {
    container:
    {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      paddingVertical: 40,
      height:230,
      top: '36%'
    },

    text:
    {
      fontSize:24,
      display:'flex',
      color:'black',
      alignSelf: 'center',
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
    },

    textInButton:
    {
      height: 30,
      fontSize: 16,
      display: 'flex',
      textAlign: 'center',
      color: 'white'
    }
  },
);

export default IndicatorStyle;