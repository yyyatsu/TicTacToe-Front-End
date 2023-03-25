//Done

import React from 'react';
import { TextInput } from 'react-native';
import InputProps from './InputProps';
import InputStyle from './InputStyle';

const { input } = InputStyle;

const Input = ({onChangeText, value, placeholder} : InputProps): JSX.Element => 
{
  return (
    <TextInput
      style = {input}
      placeholderTextColor = '#CACADB'
      onChangeText = {onChangeText}
      value = {value}
      placeholder = {placeholder}
    />
  )
};

export default Input;