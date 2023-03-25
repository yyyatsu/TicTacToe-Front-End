//Done

import React from 'react';
import { TouchableOpacity } from 'react-native';

import SignUpInButtonProps from './SignUpInButtonProps';
import SignUpInButtonStyle from './SignUpInButtonStyle';

const {button} = SignUpInButtonStyle;

const SignUpInButton = ({onPress, authentificationType, children, style}: SignUpInButtonProps): JSX.Element =>
{
  return (
    <TouchableOpacity
      style = {[button, style]}
      onPress = {() => onPress(authentificationType)}
    >
      {children}
    </TouchableOpacity>
  );
};

export default SignUpInButton;