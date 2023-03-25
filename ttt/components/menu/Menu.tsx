//Done

import { TouchableOpacity, Text, View } from 'react-native';
import MenuStyle from './MenuStyle';
import MenuProps from './MenuProps';
import MenuItem from '../menu-item/MenuItem';

const { playItem, roomsItem, container, playItemText, roomsItemText} = MenuStyle;

const Menu = ({navigation}: MenuProps): JSX.Element =>
{
  return (
    <View style = {container}>
      <MenuItem
        onPress = {() => navigation.navigate("StartGameField")}
        style = {playItem}
      >
        <Text style = {playItemText}>Play</Text>
      </MenuItem>

      <MenuItem
        onPress = {() => navigation.navigate("Rooms")}
        style = {roomsItem}
      >
        <Text style = {roomsItemText}>Rooms</Text>
      </MenuItem>

      <TouchableOpacity
        onPress = {() => navigation.navigate("TestingImages")}
        style = {{top: "70%"}}
      >
        <Text> Тестування картинок </Text>
      </TouchableOpacity>
    </View>
  )
}

export default Menu;