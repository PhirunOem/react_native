import {setBooleanValue} from '../../../redux/slice';
import {Dimensions, StatusBar, StyleSheet, View} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import IconCustom from '../../../components/iconCustom';
import {Text} from 'react-native-elements';
import {
  ButtonCustom,
  ModalCustom,
  PasswordTextInputCustom,
} from '../../../components';
import {theme} from '../../../core';

const {height, width} = Dimensions.get('window');
const statusHeight =
  StatusBar.currentHeight == undefined ? 20 : StatusBar.currentHeight;

export default function ChangePassword() {
  const isUpdatePassword = useSelector(
    (state: any) => state.action.isUpdatePassword,
  );

  const dispatch = useDispatch();
  const closeUpdateProfile = () => {
    dispatch(setBooleanValue({type: 'UPDATEPASSWORD', booleanValue: false}));
  };
  return (
    <View>
      <ModalCustom
        isStatusBarTranslucent
        isVisible={isUpdatePassword}
        children={
          <View style={[{backgroundColor: 'white'}, styles.container]}>
            <View style={styles.subContainer}>
              <View style={styles.subContainer1}>
                <View style={styles.header}>
                  <IconCustom
                    iconName={'chevron-back'}
                    iconSize={24}
                    iconColor="black"
                    onClick={closeUpdateProfile}
                  />
                  <Text h4>{'CHANGE PASSWORD'}</Text>
                </View>
                <View>
                  <ChangePasswordForm onClick={console.log('click')} />
                </View>
              </View>
              <View>
                <ButtonCustom
                  onPress={() => console.log('::: save action :::')}
                  title={'SAVE'}
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
      <View></View>
    </View>
  );
}

interface formProps {
  onClick: any;
}
const ChangePasswordForm = (props: formProps) => {
  return (
    <View style={styles.formcontainer}>
      <View>
        <PasswordTextInputCustom
          label={'CURRENT PASSWORD'}
          onChangeText={text => {
            console.log('text:::', text);
          }}
          keyboardType="default"
          defaultValue="Ark123@@$$"
          rightIcon={
            <IconCustom
              iconName={'eye-outline'}
              iconSize={20}
              iconColor="black"
              onClick={props.onClick}
            />
          }
        />
      </View>
      <View>
        <PasswordTextInputCustom
          label={'NEW PASSWORD'}
          onChangeText={text => {
            console.log('text:::', text);
          }}
          keyboardType="default"
          defaultValue={''}
          placeholder="New password"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    flex: 1,
  },
  formcontainer: {
    flexDirection: 'column',
    gap: 0,
    width: '100%',
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
