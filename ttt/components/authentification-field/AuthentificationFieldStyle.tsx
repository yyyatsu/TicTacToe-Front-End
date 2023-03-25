//Done

import { StyleSheet } from 'react-native';

const AuthentificationFieldStyle = StyleSheet.create
(
  {
    container:
    {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      paddingHorizontal: 116,
      width: 300,
      height: 142,
      top: '30%',
      alignSelf: 'center',
      borderRadius: 5,
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
      height: 30,
      fontStyle: 'normal',
      fontWeight: '400',
      fontSize: 16,
      lineHeight: 24,
      display: 'flex',
      color: 'white'
    }
  }
);

export default AuthentificationFieldStyle;