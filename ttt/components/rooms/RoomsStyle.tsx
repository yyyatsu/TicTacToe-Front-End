import { Dimensions, StyleSheet } from 'react-native';

const RoomsStyle = StyleSheet.create
(
  {
    container:
    {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      paddingHorizontal: 32,
      paddingVertical: 30,
      width: 330,
      height: 500,
      borderRadius: 5,
      backgroundColor: 'white',
      alignSelf: 'center',
      top: '20%'
    },
  }
);

export default RoomsStyle;