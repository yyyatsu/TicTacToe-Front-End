import { View, Text } from "react-native"
import RoomProps from "./RoomProps"
import RoomStyle from "./RoomStyle";

const Room = (props : RoomProps) =>
{
  return (
    <View style = {RoomStyle.container}>
      <Text style = {RoomStyle.text}>
        {props.room.name}
      </Text>
      <Text style = {RoomStyle.text}>
        {props.room.boardSize}
      </Text>
    </View>
  );
};

export default Room;