import {StyleSheet, TextInput, TextInputProps} from 'react-native';
import {Text, InputProps, Input} from '@rneui/base';
import React, {ReactNode} from 'react';
import {theme} from '../core';

const TextInputCustom: React.FC<InputProps> = ({
  label,
  leftIcon = <Text>Icon</Text>,
  defaultValue,
  errorMessage = '',
  onChangeText,
  rightIcon,
  secureTextEntry = false,
  keyboardType,
  inputStyle = {
    color: theme.colors.secondary,
    paddingHorizontal: 0,
  },
  labelStyle = {paddingVertical: 0},
  inputContainerStyle = {},
  placeholder,
}) => {
  const textStyle = {
    color: 'black',
    fontSize: 11,
  };
  return (
    <Input
      onChangeText={onChangeText}
      label={<Text style={textStyle}>{label}</Text>}
      errorMessage={errorMessage}
      errorStyle={{color: 'red'}}
      defaultValue={defaultValue}
      rightIcon={rightIcon}
      secureTextEntry={secureTextEntry}
      keyboardType={keyboardType}
      inputStyle={inputStyle}
      labelStyle={labelStyle}
      inputContainerStyle={inputContainerStyle}
      placeholder={placeholder}
    />
  );
};

export default TextInputCustom;
