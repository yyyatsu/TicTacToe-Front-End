//Make refs
import { useState } from 'react';
import { TouchableOpacity, View, Text } from 'react-native';

import { HttpStatusCode } from 'axios';

import AuthentificationFieldProps from './AuthentificationFieldProps';
import AuthentificationFieldStyle from './AuthentificationFieldStyle';
import AuthentificationType from '../../enums/AuthentificationType';
import AuthentificationManager from '../../management/authentification-manager/AuthentificationManager';
import Input from '../input/Input';
import AccountService from '../../services/account-service/AccountService';

const { container, text, button } = AuthentificationFieldStyle;

const AuthentificationField = ({route, navigation}: AuthentificationFieldProps): JSX.Element =>
{
  const { authentificationType } = route.params;

  const isRegistrationType = authentificationType === AuthentificationType.Registration;

  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const chooseAuthentificationMethod = 
  {
    [AuthentificationType.Login]:
    {
      authentificate: AccountService.login,
      args: {Name: name, Password: password}
    },

    [AuthentificationType.Registration]: 
    {
      authentificate: AccountService.register,
      args: {Name: name, Password: password, ConfirmPassword: confirmPassword}
    }
  };

  const authentificate = async (): Promise<void> =>
  {
    const { authentificate, args } = chooseAuthentificationMethod[authentificationType];

    let user = await authentificate(args as any)

    if(user.status == HttpStatusCode.Ok)
    {
      await AuthentificationManager.signInAsync(name);
      navigation.navigate('Menu');
    }
  };

  return (
    <View style = {container}>
      <Input
        onChangeText = {setName}
        value = {name}
        placeholder = 'Login'
      />

      <Input
        onChangeText = {setPassword}
        value = {password}
        placeholder = 'Password'
      />

      {isRegistrationType &&
        <Input
          onChangeText = {setConfirmPassword}
          value = {confirmPassword}
          placeholder = 'Confirm Password'
        />
      }

      <TouchableOpacity
        style = {button}
        onPress = {authentificate}
      >
        <Text style = {text}>
          {isRegistrationType ? 'Sign up' : 'Log in'}
        </Text>  
      </TouchableOpacity>

    </View>
  );
}

export default AuthentificationField;