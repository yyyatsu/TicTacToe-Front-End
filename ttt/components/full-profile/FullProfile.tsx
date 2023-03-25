import { useState } from "react";
import { View } from "react-native";
import { useAsyncEffect } from 'use-async-effect';

import AuthentificationManager from "../../management/authentification-manager/AuthentificationManager";
import PhotoService from "../../services/photo-service/PhotoService";
import Avatar from "../avatar/Avatar";
import FullProfileStyle from "./FullProfileStyle";

const { container } = FullProfileStyle;

const FullProfile = (): JSX.Element =>
{
  const [avatar, setAvatar] = useState('');
  const [name, setName] = useState('');

  useAsyncEffect(async () =>
  {
    setName((await AuthentificationManager.getUserName())!);
    setAvatar((await PhotoService.getImage(name)).data);
  }, []);

  return(
    <View style = {container}>
      <Avatar
        onPress={null}
        uri = {avatar}
      />
    </View>
  )
};

export default FullProfile;