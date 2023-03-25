import { View, Modal } from 'react-native';
import ProfilePopupProps from "./ProfilePopupProps";
import ProfilePopupStyle from "./ProfilePopupStyle";

const ProfilePopup = (props: ProfilePopupProps) =>
{
  return(
    <Modal 
      animationType = 'slide' 
      visible = {props.visible} 
      transparent = {true} 
      onRequestClose = {props.onClose}
    >
      {props.statistics &&
        <View style = {ProfilePopupStyle.container}>
          
        </View>
      }
    </Modal>
  )
}

export default ProfilePopup;