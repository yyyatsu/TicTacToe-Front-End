import React, { useState } from "react";
import { View, FlatList, SafeAreaView, TouchableOpacity } from "react-native"
import useAsyncEffect from "use-async-effect";
import AuthentificationManager from "../../management/authentification-manager/AuthentificationManager";
import RoomService from "../../services/room-service/RoomService";
import Roome from "../../types/Room";
import Room from "../room/Room";
import RoomsProps from "./RoomsProps";
import RoomsStyle from "./RoomsStyle";

const Rooms = ({navigation}: RoomsProps): JSX.Element =>
{
  const [rooms, setRooms] = useState<Array<Roome>>();
  const [page, setPage] = useState(1);
  const [name, setName] = useState('');

  useAsyncEffect(async () =>
  {
    const name = await AuthentificationManager.getUserName();
    setName(name!);
  }, []);

  useAsyncEffect(async () =>
  {
    setRooms((await RoomService.getRooms(page)).data);
  }, [page]);

  const onPress = (room: Roome) =>
  {
    const connection = {userName: name, roomName: room.name};
    const boardSize = room.boardSize;

    navigation.navigate('Lobby', {connection, boardSize});
  }

  const renderRoom = (room: Roome) =>
  {
    return (
      <TouchableOpacity onPress = {() => onPress(room)}>
        <Room room = {room}/>
      </TouchableOpacity>
    );
  };

  return (
    <View style = {RoomsStyle.container}>
      {rooms &&
        <FlatList
          data = {rooms}
          renderItem = { ({item}) => renderRoom(item) }
          keyExtractor={item => item.name}
        />
      }
    </View>
  );
};

export default Rooms;