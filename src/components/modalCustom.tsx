import {ReactNode} from 'react';
import {StyleSheet, ViewStyle} from 'react-native';
import Modal from 'react-native-modal';

interface modalProps {
  isVisible: boolean;
  children: ReactNode;
  isStatusBarTranslucent?: boolean;
  style?: ViewStyle;
}
export default function ModalCustom(props: modalProps) {
  return (
    <Modal
      isVisible={props.isVisible || false}
      statusBarTranslucent={props.isStatusBarTranslucent}
      animationInTiming={0.1}
      animationOutTiming={0.1}
      animationIn={'flash'}
      animationOut={'flash'}
      style={[modalStyle(props).container]}>
      {props.children}
    </Modal>
  );
}

const modalStyle = (props: modalProps) =>
  StyleSheet.create({
    container: {
      // height: '100%',
      justifyContent: 'flex-end',
      margin: 0,
    },
  });
