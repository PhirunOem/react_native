import React from 'react';
import {StyleSheet, Text} from 'react-native';
import CheckBox from 'react-native-check-box';

interface CheckBoxProps {
  onClick(): void;
  isCheck: boolean;
  checkBoxColor: any;
  title: string;
}
export default function CheckBoxCustom(props: CheckBoxProps) {
  return (
    <CheckBox
      {...props}
      onClick={props.onClick}
      isChecked={props.isCheck}
      rightTextView=<Text style={styles.text}>{props.title}</Text>
      checkBoxColor={props.checkBoxColor}
      rightTextStyle={styles.text}
    />
  );
}

const styles = StyleSheet.create({
  text: {
    paddingLeft: 5,
    fontWeight: 'bold',
  },
});
