import { useEffect, useState } from "react";
import { Modal, TouchableOpacity, View, Text } from "react-native";
import GameResultType from "../../enums/GameResultType";
import GameResultPopupProps from "./GameResultPopupProps";
import GameResultPopupStyle from "./GameResultPopupStyle";

const GameResultPopup = (props: GameResultPopupProps) => 
{
  const [message, setMessage] = useState<string>("")

  useEffect(() =>
  {
    if(props.gameResult == GameResultType.Win)
    {
      setMessage("Виграш")
    }

    if(props.gameResult == GameResultType.Draw)
    {
      setMessage("Нічия")
    }

    if(props.gameResult == GameResultType.Lose)
    {
      setMessage("Програш")
    }
  }, [props.gameResult])


  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={props.visible}
      onRequestClose={props.onClose}
    >
      <View style={GameResultPopupStyle.container}>
        <View style={GameResultPopupStyle.popup}>
          <Text>{message}</Text>
            <TouchableOpacity style ={{width:50, height: 50, backgroundColor: 'green'}} onPress={props.onClose}>
              <Text>Close</Text>
            </TouchableOpacity>
        </View>
      </View>
    </Modal>
    );
  };

  export default GameResultPopup;