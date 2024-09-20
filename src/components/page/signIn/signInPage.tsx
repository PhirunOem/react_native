import {StatusBar, View} from 'react-native';
import {signInStyle} from './style';
import {useSelector, useDispatch} from 'react-redux';
import {
  AnimationBackgroundImage,
  ButtonCustom,
  IconCustom,
  ModalCustom,
} from '../../../components';
import React from 'react';
import {setBooleanValue} from '../../../redux/slice';
import {theme} from '../../../core';
export default function SignInPage(navigation: any) {
  const isOpenSignIn = useSelector((state: any) => state.action.isSignIn);
  const dispatch = useDispatch();
  const OpenSignInWith = () => {
    dispatch(setBooleanValue({type: 'SIGNIN', booleanValue: false}));
    dispatch(setBooleanValue({type: 'SIGNINWITH', booleanValue: true}));
  };
  const _pushToCreateProduct = () => {
    dispatch(setBooleanValue({type: 'SIGNIN', booleanValue: false}));
    navigation.navigate('Home', {
      screen: 'CreateProduct',
      initial: false,
    });
  };
  return (
    <View>
      <StatusBar barStyle={'dark-content'} />
      <ModalCustom isVisible={isOpenSignIn} isStatusBarTranslucent={true}>
        <View style={signInStyle.contentContainer}>
          <AnimationBackgroundImage />
          <View style={signInStyle.subContainer}>
            <View style={signInStyle.icon}>
              <IconCustom
                iconName="close-sharp"
                iconSize={30}
                iconColor="black"
                onClick={() =>
                  dispatch(
                    setBooleanValue({type: 'SIGNIN', booleanValue: false}),
                  )
                }
              />
            </View>
            <View style={signInStyle.content}>
              <View style={signInStyle.contentChild}>
                <View>
                  <ButtonCustom
                    onPress={() => OpenSignInWith()}
                    title={'LOG IN'}
                    isSemiBoldText={true}
                    backgroundColor={'white'}
                    paddingVertical={10}
                    paddingHorizontal={8}
                    fontSize={14}
                    letterSpacing={0.5}
                    textColor="black"
                    borderRaduis={6}
                    borderWidth={1}
                  />
                </View>
                <View>
                  <ButtonCustom
                    onPress={_pushToCreateProduct}
                    title={'ADD PRODUCTS'} //JOIN THE CLUB
                    backgroundColor={theme.colors.primary}
                    paddingVertical={10}
                    paddingHorizontal={8}
                    isSemiBoldText={true}
                    fontSize={14}
                    letterSpacing={0.5}
                    borderRaduis={6}
                  />
                </View>
              </View>
            </View>
          </View>
        </View>
      </ModalCustom>
    </View>
  );
}
