import React, {useEffect, useState} from 'react';
import ModalCustom from './modalCustom';
import {Pressable, StatusBar, StyleSheet, Text, View} from 'react-native';
import IconCustom from './iconCustom';
import {Divider} from '@rneui/base';
import {theme} from '../core';
import Icon from 'react-native-vector-icons/Ionicons';

interface Props {
  /** Used to visible the modal */
  isVisible: boolean;
  topAction?(): void;
  children: React.ReactNode;
  title?: string;
  buttonTitle?: string;
  iconName?: string;
  bottomAction?(): void;
  /** Used to set a half of screen of the modal when it set to true */
  isBottomModal?: boolean;
  isHoverAndChagneBackgroundBotton?: boolean;
  isCenterTitleButton?: boolean;
  isFloatLeftIcon?: boolean;
  /** Used to unvisible bottom button  when it is setted to true */
  noBottomAction?: boolean;
}

const statusBarHeight = StatusBar.currentHeight;
const ModalCustomWithAction: React.FC<Props> = (props: Props) => {
  const [isHoverButton, setIsHoverButon] = useState(false);
  useEffect(() => {
    setIsHoverButon(props.isHoverAndChagneBackgroundBotton!);
  }, [props.isHoverAndChagneBackgroundBotton]);
  const handleChangeButtonBackground = () => {
    setIsHoverButon(!isHoverButton);
  };
  return (
    <ModalCustom isStatusBarTranslucent isVisible={props.isVisible}>
      <View style={styles(props).content}>
        <View style={styles(props).subContent}>
          <View style={styles(props).child}>
            <View style={styles(props).header}>
              <Text style={styles(props).contentTitle}>
                {props.title?.toUpperCase()}
              </Text>
              <IconCustom
                iconName={props.iconName || 'close-outline'}
                iconSize={24}
                iconColor={'#000'}
                onClick={props.topAction}
              />
            </View>
            <Divider width={1} color="#E5E5E5" />
            <View>{props.children}</View>
          </View>
          <View style={styles(props).bottom}>
            <Pressable
              style={styles(props).bottom}
              onPressIn={handleChangeButtonBackground}
              onPressOut={handleChangeButtonBackground}
              onPress={props.bottomAction}>
              <View
                style={
                  styles({
                    ...props,
                    isHoverAndChagneBackgroundBotton: isHoverButton,
                  }).childBottom
                }>
                <Text
                  style={{
                    fontSize: 16,
                    color: isHoverButton ? '#50555C' : theme.colors.btnText,
                  }}>
                  {props.buttonTitle?.toUpperCase() || 'EXAMPLE'}
                </Text>
                {!props.isCenterTitleButton && (
                  <View>
                    <Icon
                      name="arrow-forward-outline"
                      size={20}
                      color={isHoverButton ? '#50555C' : theme.colors.btnText}
                      onPress={props.bottomAction}
                      onPressIn={handleChangeButtonBackground}
                      onPressOut={handleChangeButtonBackground}
                    />
                  </View>
                )}
              </View>
            </Pressable>
          </View>
        </View>
      </View>
    </ModalCustom>
  );
};

const styles = (props: Props) =>
  StyleSheet.create({
    content: {
      flex: 1,
      backgroundColor: props.isBottomModal ? undefined : 'white',
      justifyContent: props.isBottomModal ? 'flex-end' : undefined,
    },
    subContent: {
      flex: props.isBottomModal ? 0 : 1,
      borderRadius: props.isBottomModal ? 6 : 0,
      justifyContent: 'space-between',
      backgroundColor: 'white',
    },
    child: {
      top: props.isBottomModal ? 0 : statusBarHeight,
    },
    contentTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#000',
    },
    header: {
      padding: 20,
      width: '100%',
      alignItems: 'center',
      flexDirection: props.isFloatLeftIcon ? 'row-reverse' : 'row',
      justifyContent: props.isFloatLeftIcon ? 'flex-end' : 'space-between',
      gap: 5,
    },
    containerAction: {
      paddingHorizontal: 50,
      paddingVertical: 30,
      width: '100%',
      alignItems: 'center',
      gap: 5,
    },
    action: {
      width: '80%',
    },
    bottom: {
      display: props.noBottomAction ? 'none' : undefined,
      bottom: statusBarHeight! / 2 || 25,
      paddingHorizontal: props.isCenterTitleButton ? 20 : 0,
    },
    childBottom: {
      flexDirection: 'row',
      justifyContent: props.isCenterTitleButton ? 'center' : 'space-between',
      width: '100%',
      backgroundColor: props.isHoverAndChagneBackgroundBotton
        ? '#D0D3D9E5'
        : theme.colors.background,
      height: 50,
      alignItems: 'center',
      paddingHorizontal: 20,
      borderRadius: props.isCenterTitleButton ? 6 : 0,
    },
    bottomIcon: {
      display: props.isCenterTitleButton ? 'none' : undefined,
    },
  });
export default React.memo(ModalCustomWithAction);
