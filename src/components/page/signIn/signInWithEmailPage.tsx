import {setBooleanValue} from '../../../redux/slice';
import {Dimensions, StatusBar, StyleSheet, View} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {Text} from 'react-native-elements';
import {theme} from '../../../core';
import {useState} from 'react';
import {UserProfilePage} from '../profile';
import {
  PasswordTextInputCustom,
  ModalCustom,
  TextInputCustom,
  ButtonCustom,
  IconCustom,
} from '../../../components';

const {height, width} = Dimensions.get('window');
const statusHeight =
  StatusBar.currentHeight == undefined ? 20 : StatusBar.currentHeight;

export default function SignInWithEmailPage() {
  const [isChangeIcon, setChangeIcon] = useState(true);
  const isOpenSignInWithEmail = useSelector(
    (state: any) => state.action.isSignInWithEmail,
  );
  const dispatch = useDispatch();
  const closeSignInWithEmail = () => {
    dispatch(setBooleanValue({type: 'SIGNINWITHEMAIL', booleanValue: false}));
  };
  const changeIcon = () => {
    setChangeIcon(!isChangeIcon);
  };
  const openUserProfile = () => {
    dispatch(setBooleanValue({type: 'UPDATEPROFILE', booleanValue: true}));
    dispatch(setBooleanValue({type: 'SIGNINWITHEMAIL', booleanValue: false}));
    dispatch(setBooleanValue({type: 'SIGNINWITH', booleanValue: false}));
  };
  return (
    <View>
      <ModalCustom
        isStatusBarTranslucent
        isVisible={isOpenSignInWithEmail}
        children={
          <View style={[{backgroundColor: 'white'}, styles.container]}>
            <View style={styles.subContainer}>
              <View style={styles.subContainer1}>
                <View style={styles.header}>
                  <IconCustom
                    iconName={'chevron-back'}
                    iconSize={24}
                    iconColor="black"
                    onClick={closeSignInWithEmail}
                  />
                  <Text h4>{'GO FOR IT'}</Text>
                </View>
                <Text style={{color: theme.colors.secondary, left: 6}}>
                  {"Let's check if you have an account..."}
                </Text>
                <UserForm />
              </View>
              <View>
                <ButtonCustom
                  onPress={openUserProfile}
                  title={'REGISTER'}
                  textColor={'#00F0FF'}
                  isIcon
                  iconName="arrow-forward"
                  isJustifyTextAndIcon
                  iconColor={'#00F0FF'}
                  backgroundColor={theme.colors.background}
                  paddingHorizontal={20}
                  fontSize={16}
                  paddingVertical={15}
                />
              </View>
            </View>
          </View>
        }
      />
      <UserProfilePage />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    position: 'relative',
    flex: 1,
  },
  subContainer: {
    paddingHorizontal: 22,
    paddingVertical: 32,
    position: 'absolute',
    top: statusHeight!,
    width: '100%',
    height: height - statusHeight!,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignContent: 'center',
  },
  subContainer1: {
    flexDirection: 'column',
    gap: 35,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    gap: 10,
    alignItems: 'center',
  },
  bottomAction: {
    width: '100%',
  },
});

const UserForm = () => {
  return (
    <View style={{flexDirection: 'column', gap: 10}}>
      <TextInputCustom
        label={'EMAIL'}
        onChangeText={text => {
          console.log('text:::', text);
        }}
        keyboardType="email-address"
        placeholder="Enter email"
      />
      <PasswordTextInputCustom />
    </View>
  );
};
