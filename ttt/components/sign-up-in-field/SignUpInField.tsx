//Done

import { View, Text } from 'react-native';

import SignUpInFieldProps from './SignUpInFieldProps';
import SignUpInFieldStyle from './SignUpInFieldStyle';

import SignUpInButton from '../sign-up-in-button/SignUpInButton';
import AuthentificationType from '../../enums/AuthentificationType';

const { container, signUpButtonStyle, signUpTextStyle, logInButtonStyle, logInTextStyle } = SignUpInFieldStyle;

const SignUpInField = ({navigation}: SignUpInFieldProps): JSX.Element =>
{
  const onPress = (authentificationType: AuthentificationType): void =>
  {
    navigation.navigate('AuthentificationField', {authentificationType: authentificationType});
  };

  return (
    <View style = {[container]}>
      <SignUpInButton
        onPress={onPress}
        authentificationType = {AuthentificationType.Registration}
        style = {signUpButtonStyle}
      >
        <Text style = {[signUpTextStyle]}>
          Sign up
        </Text>
      </SignUpInButton>

      <SignUpInButton
        onPress={onPress}
        authentificationType = {AuthentificationType.Login}
        style = {logInButtonStyle}
      >
        <Text style = {[logInTextStyle]}>
          Log in
        </Text>
      </SignUpInButton>   
    </View>
  );
};

export default SignUpInField;