import {setBooleanValue} from '../../../redux/slice';
import TextInputCustom from '../../../components/textInputCustom';
import {Dimensions, StatusBar, StyleSheet, View} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import IconCustom from '../../../components/iconCustom';
import {Text} from 'react-native-elements';
import {ButtonCustom, ModalCustom} from '../../../components';
import {theme} from '../../../core';
import {useState} from 'react';
import {styles} from './style';
import UserInputForm from './userInputForm';

const {height, width} = Dimensions.get('window');
const statusHeight =
  StatusBar.currentHeight == undefined ? 20 : StatusBar.currentHeight;

export default function UserProfilePage() {
  const [isChangeIcon, setChangeIcon] = useState(false);
  const isUpdateProfile = useSelector(
    (state: any) => state.action.isUpdateProfile,
  );
  const dispatch = useDispatch();
  const closeUpdateProfile = () => {
    dispatch(setBooleanValue({type: 'UPDATEPROFILE', booleanValue: false}));
  };
  const changeIcon = () => {
    setChangeIcon(!isChangeIcon);
  };
  return (
    <View>
      <ModalCustom
        isStatusBarTranslucent
        isVisible={isUpdateProfile}
        children={
          <View style={[{backgroundColor: 'white'}, styles.container]}>
            <View style={styles.subContainer}>
              <View style={styles.subContainer1}>
                <View style={styles.header}>
                  <IconCustom
                    iconName={'close-sharp'}
                    iconSize={24}
                    iconColor="black"
                    onClick={closeUpdateProfile}
                  />
                  <Text h4>{'MY ACCOUNT'}</Text>
                </View>
                <UserInputForm onClick={changeIcon} />
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
