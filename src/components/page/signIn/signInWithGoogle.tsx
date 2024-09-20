import {
  GoogleSignin,
  statusCodes,
  GoogleSigninButton,
} from '@react-native-google-signin/google-signin';
import {ButtonCustom} from 'components';
import {theme} from '../../../core';
import {useEffect} from 'react';
import {handleSignInWithGoogle} from '../../../firebase/funcs';
import Config from 'react-native-config';

const SignInWithGoogle = () => {
  const webClientId = `${Config.WEB_CLIENT_ID}`;
  useEffect(() => {
    GoogleSignin.configure({
      webClientId: webClientId,
    });
  }, []);
  const googleLogin = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      console.log('::::::::::: success ::::::::::');
      const userInfo = await GoogleSignin.signIn();
      if (userInfo) {
        const id_token = userInfo.data?.idToken;
        await handleSignInWithGoogle(id_token).then(() => {});
      }
    } catch (error: any) {
      console.log(':::::::::: error :::::::::;', error);
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        console.log(error);
      } else if (error.code === statusCodes.IN_PROGRESS) {
        console.log(error);
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        console.log(error);
      } else {
      }
    }
  };
  return (
    <ButtonCustom
      onPress={googleLogin}
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
      iconSize={18}
    />
  );
};

export default SignInWithGoogle;
