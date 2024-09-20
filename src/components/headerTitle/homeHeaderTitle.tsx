import {Avatar, Divider} from '@rneui/base';
import {Alert, Text, View} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {setBooleanValue} from '../../redux/slice';
import React from 'react';
import {IconCustom} from '../../components';
import {isEmpty} from 'validator';
import {userModels} from 'core';
import {handleSignOut} from '../../firebase/funcs';
import {removeUserInfo} from '../../redux/userSlice';

interface Props {
  userName: string;
}

const HomeHeaderTitle: React.FC<Props> = () => {
  const userInfo: userModels = useSelector((state: any) => state.user.userInfo);
  let userName = ' ';
  let profileUrl = '';
  const user: userModels = {
    userName: null,
    email: null,
    password: '',
    phoneNumber: null,
    profileURL: null,
    isAdmin: false,
  };
  console.log('::::::::: user Info ::::::::', userInfo);
  if (userInfo.userName !== null && userInfo.profileURL !== null) {
    userName = userInfo.userName;
    profileUrl = userInfo.profileURL;
  }

  const upperCaseUserName = userName.toLocaleUpperCase();
  const dispatch = useDispatch();
  const openSignIn = () => {
    dispatch(setBooleanValue({type: 'SIGNIN', booleanValue: true}));
  };
  return (
    <View style={{gap: 3}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 2,
          alignItems: 'center',
          width: '100%',
          paddingBottom: 0,
        }}>
        <View>
          <Text style={{color: 'white', letterSpacing: 1, fontSize: 17}}>
            {isEmpty(upperCaseUserName) ? 'HELLO SIR/MADAM' : upperCaseUserName}
          </Text>
        </View>
        <View>
          {isEmpty(profileUrl) &&
          isEmpty(userName) &&
          isEmpty(userInfo.email!) ? (
            <IconCustom
              iconName="person-outline"
              iconSize={20}
              iconColor={'white'}
              onClick={openSignIn}></IconCustom>
          ) : (
            <Avatar
              size={25}
              rounded
              source={{uri: profileUrl}}
              title={!isEmpty(profileUrl) ? '' : userName.charAt(0)}
              onPress={() => {
                handleSignOut().then(() => {
                  dispatch(removeUserInfo(userInfo));
                });
              }}
            />
          )}
        </View>
      </View>
      <View>
        <Divider color={'#FFFFFF'} width={1.1} />
      </View>
    </View>
  );
};

export default HomeHeaderTitle;
