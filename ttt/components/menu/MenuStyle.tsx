//Done

import { StyleSheet } from 'react-native';

const text =
{
  height: 30,
  fontSize: 16,
  lineHeight: 24,
};

const MenuStyle = StyleSheet.create
(
  {
    container:
    {
      display: 'flex',
      alignItems: 'center',
      position: 'absolute',
      width: 300,
      height:152,
      top:'33%',
      alignSelf:'center'
    },

    playItemText:
    {
      ...text,
      fontWeight: '400',
      alignSelf: 'center',
      color: 'white'
    },

    roomsItemText:
    {
      ...text,
      fontWeight: '400',
      alignSelf: 'center',
      color: '#141522'
    },

    playItem:
    {
      backgroundColor: '#5C8BE8'
    },

    roomsItem:
    {
      backgroundColor: '#F5F5F7'
    },
  }
);

export default MenuStyle;