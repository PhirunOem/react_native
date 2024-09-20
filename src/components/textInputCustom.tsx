import {StyleSheet, TextInput, TextInputProps, ColorValue} from 'react-native';
import {Text, InputProps, Input} from '@rneui/themed';
import {Input as BaseInput} from '@rneui/base';

import React, {ReactNode, Ref} from 'react';
import {theme} from '../core';

const TextInputCustom: React.FC<InputProps> = ({
  leftIcon = <Text>Icon</Text>,
  inputStyle = {
    color: theme.colors.secondary,
    paddingHorizontal: 0,
  },
  labelStyle = {color: 'black', fontSize: 11},
  inputContainerStyle = {},
  containerStyle = {},
  renderErrorMessage = true,
  ...prop
}) => {
  return (
    <Input
      {...prop}
      multiline={prop.multiline}
      label={<Text style={labelStyle}>{prop.label}</Text>}
      errorStyle={[{color: 'red'}, prop.errorStyle]}
      keyboardType={prop.keyboardType}
      inputStyle={inputStyle}
      containerStyle={containerStyle}
      inputContainerStyle={inputContainerStyle}
      placeholder={prop.placeholder}
      placeholderTextColor={prop.placeholderTextColor}
      renderErrorMessage={renderErrorMessage}
      underlineColorAndroid={prop.underlineColorAndroid}
      onBlur={prop.onBlur}
    />
  );
};

export default TextInputCustom;
