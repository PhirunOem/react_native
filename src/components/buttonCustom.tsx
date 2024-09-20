import {theme} from '../core';
import React from 'react';
import {
  StyleSheet,
  Pressable,
  Text,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import {View} from 'react-native-animatable';
import Icon from 'react-native-vector-icons/Ionicons';
interface ButtonCustomProps {
  onPress?(): void;
  title: string;
  /** Note that before apply icon , you have to set isIcon to true first and icon name have to use in Ionicons directory check here => https://oblador.github.io/react-native-vector-icons/#Ionicons */
  iconName?: string;
  disable?: boolean;
  isIcon?: boolean;
  backgroundColor?: string;
  textColor?: string;
  iconColor?: string;
  fontSize?: number;
  paddingVertical?: number;
  paddingHorizontal?: number;
  isJustifyTextAndIcon?: boolean;
  iconSize?: number;
  isBoldText?: boolean;
  isNormalText?: boolean;
  isSemiBoldText?: boolean;
  borderRaduis?: number;
  letterSpacing?: number;
  borderWidth?: number;
  borderColor?: string;
  isReversIconAndText?: boolean;
  isCenter?: boolean;
  gap?: number;
  style?: ViewStyle;
}
const ButtonCustom = (props: ButtonCustomProps) => {
  return (
    <TouchableOpacity
      disabled={props.disable}
      activeOpacity={0.5}
      onPress={props.onPress}>
      <View style={styles(props).button} {...props}>
        <Text style={styles(props).text}>{props.title}</Text>
        {props.isIcon ? (
          <Icon
            name={props.iconName!}
            size={props.iconSize || 20}
            color={props.iconColor || 'blue'}
          />
        ) : (
          ''
        )}
      </View>
    </TouchableOpacity>
  );
};
export default ButtonCustom;

const styles = (props: ButtonCustomProps) =>
  StyleSheet.create({
    button: {
      verticalAlign: 'middle',
      alignItems: 'center',
      gap: props.gap || 3,
      paddingVertical: props.paddingVertical || 3,
      paddingHorizontal: props.paddingHorizontal || 5,
      borderRadius: props.borderRaduis || 0,
      borderWidth: props.borderWidth || 0,
      borderColor: props.borderColor || '#CBCBCB',
      backgroundColor: props.disable
        ? theme.colors.disable
        : props.backgroundColor,
      display: 'flex',
      flexDirection: props.isReversIconAndText ? 'row-reverse' : 'row',
      width: 'auto',
      justifyContent: props.isJustifyTextAndIcon
        ? 'space-between'
        : props.isCenter
        ? 'center'
        : props.isReversIconAndText
        ? 'flex-end'
        : 'flex-start',
    },
    text: {
      fontSize: props.fontSize || 10,
      // lineHeight: 21,
      fontWeight: props.isBoldText
        ? 'bold'
        : props.isSemiBoldText
        ? '400'
        : '300',
      color: props.textColor || 'white',
      letterSpacing:
        props.letterSpacing == 0
          ? 0
          : props.letterSpacing !== 0
          ? props.letterSpacing
          : 2,
      paddingHorizontal: 2,
    },
  });
