import {Divider} from '@rneui/base';
import ButtonCustom from '../buttonCustom';
import {ScrollView, Text, View} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {isClickProductType, setBooleanValue} from '../../redux/slice';
import {productTypeData} from '../../utils';
import React from 'react';
import {
  FilterCategoryPage,
  SignInPage,
  SignInWithPage,
} from '../../components/page';
import {IconCustom} from '../../components';

interface Props {
  userName: string;
}

const HomeHeaderTitle: React.FC<Props> = ({userName = 'Phirun'}) => {
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
            {'HELLO ' + upperCaseUserName}
          </Text>
        </View>
        <View>
          <IconCustom
            iconName="person-outline"
            iconSize={20}
            iconColor={'white'}
            onClick={openSignIn}></IconCustom>
        </View>
      </View>
      <View>
        <Divider color={'#FFFFFF'} width={1.1} />
      </View>
    </View>
  );
};

export default HomeHeaderTitle;
