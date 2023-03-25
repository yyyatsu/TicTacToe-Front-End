import { Dimensions, StyleSheet } from 'react-native';

const RoomStyle = StyleSheet.create
(
  {
    container:
    {
     display: 'flex',
     flexDirection: 'row',
     justifyContent: 'center',
     paddingHorizontal: 6,
     paddingVertical: 22,
     width: 250,
     height: 60,
     backgroundColor: '#5C8BE8',
     borderRadius: 10,
     margin: 10
    },

    text: 
    {
      width: 100,
      height: 20,
      fontStyle: 'normal',
      fontSize: 14,
      fontWeight: '500',
      color: 'white',
    }
  }
);

export default RoomStyle;