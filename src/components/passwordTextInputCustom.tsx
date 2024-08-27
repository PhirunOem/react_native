import React, {useState} from 'react';
import TextInputCustom from './textInputCustom';
import {Text} from 'react-native';
import IconCustom from './iconCustom';
import {InputProps} from '@rneui/base';

const PasswordTextInputCustom: React.FC<InputProps> = ({
  onChangeText,
  placeholder = 'Enter password',
  label = 'Password',
}) => {
  const [isPassword, setIsPassword] = useState(true);

  const changeToText = () => {
    setIsPassword(!isPassword);
  };
  return (
    <TextInputCustom
      label={label}
      rightIcon={
        <IconCustom
          iconName={isPassword ? 'eye-off-outline' : 'eye-outline'}
          iconSize={18}
          iconColor="black"
          onClick={changeToText}
        />
      }
      secureTextEntry={isPassword}
      placeholder={placeholder}
      onChangeText={onChangeText}
    />
  );
};

export default PasswordTextInputCustom;
