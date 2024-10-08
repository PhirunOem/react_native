import ModalCustom from '../../../components/modalCustom';
import React from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';
import {Divider, Text} from 'react-native-elements';
import {useDispatch, useSelector} from 'react-redux';
import {setBooleanValue} from '../../../redux/slice';
import IconCustom from '../../../components/iconCustom';
import ButtonCustom from '../../../components/buttonCustom';
import {theme} from '../../../core';
import SignInWithEmailPage from './signInWithEmailPage';

const SignInWithPage: React.FC = () => {
  const isOpenSignInWith = useSelector(
    (state: any) => state.action.isSignInWith,
  );
  const dispatch = useDispatch();
  const CloseSignInWith = () => {
    dispatch(setBooleanValue({type: 'SIGNINWITH', booleanValue: false}));
  };
  const OpenSignInWithEmail = () => {
    dispatch(setBooleanValue({type: 'SIGNINWITHEMAIL', booleanValue: true}));
  };

  return (
    <View>
      <StatusBar barStyle={'dark-content'} />
      <ModalCustom
        isStatusBarTranslucent={true}
        isVisible={isOpenSignInWith}
        children={
          <View style={styles.container}>
            <View style={styles.subContainer}>
              <View style={styles.header}>
                <View>
                  <Text h4>{'SIGN IN WITH'}</Text>
                </View>
                <IconCustom
                  iconName={'close-sharp'}
                  iconSize={30}
                  onClick={CloseSignInWith}
                  iconColor="black"
                />
              </View>
              <View>
                <SignInWithGoogleButton />
              </View>
              <View style={styles.textWithLine}>
                <View style={{flex: 1}}>
                  <Divider />
                </View>
                <View style={{alignItems: 'center'}}>
                  <Text style={{color: '#929292'}}>OR</Text>
                </View>
                <View style={{flex: 1}}>
                  <Divider />
                </View>
              </View>
              <View style={styles.otheraction}>
                <ButtonWithIcon
                  onClick={() => console.log('clicked!!')}
                  iconName={'logo-facebook'}
                  label={'Facebook'}
                />
                <Divider />
                <ButtonWithIcon
                  onClick={() => console.log('clicked!!')}
                  iconName={'call'}
                  label={'Phone number'}
                />
                <Divider />
                <ButtonWithIcon
                  onClick={OpenSignInWithEmail}
                  iconName={'mail'}
                  label={'Email'}
                />
                <Divider />
              </View>
            </View>
          </View>
        }></ModalCustom>
      <SignInWithEmailPage />
    </View>
  );
};

export default SignInWithPage;

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    height: '100%',
    backgroundColor: 'white',
  },
  subContainer: {
    position: 'absolute',
    top: '7%',
    paddingHorizontal: 22,
    gap: 25,
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  otheraction: {
    gap: 15,
  },
  textWithLine: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
  },
});

interface Props {
  onClick(): void;
  iconName: string;
  label: string;
}
const ButtonWithIcon = (props: Props) => {
  return (
    <ButtonCustom
      onPress={props.onClick}
      title={props.label}
      textColor="#929292"
      letterSpacing={0}
      fontSize={14}
      isIcon
      iconName={props.iconName}
      isReversIconAndText
      iconColor="black"
      isSemiBoldText
      gap={15}
      borderRaduis={6}
      iconSize={20}
    />
  );
};
const SignInWithGoogleButton = () => {
  return (
    <ButtonCustom
      onPress={function (): void {
        console.log(':::: sign in with google ::::');
      }}
      title={'Sign in with google'}
      textColor="#00F0FF"
      letterSpacing={0}
      fontSize={18}
      isIcon
      backgroundColor={theme.colors.primary}
      isCenter
      iconName="logo-google"
      isReversIconAndText
      paddingVertical={8}
      iconColor="black"
      isSemiBoldText
      borderRaduis={6}
      iconSize={16}
    />
  );
};
