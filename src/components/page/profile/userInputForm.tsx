import {useDispatch} from 'react-redux';
import {TextInputCustom, RadioCustom, IconCustom} from '../../../components';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import {setBooleanValue} from '../../../redux/slice';
import ChangePassword from './changePassword';

interface formProps {
  onClick: any;
}
const {height, width} = Dimensions.get('screen');
const UpdateProfilePage = (props: formProps) => {
  const dispatch = useDispatch();
  const dataRender = [
    {
      id: '1', // acts as primary key, should be unique and non-empty string
      label: 'Male',
      value: 'male',
    },
    {
      id: '2',
      label: 'Female',
      value: 'female',
    },
    {
      id: '3',
      label: 'Prefer not to say',
      value: 'none',
    },
  ];
  const OpenUpdatePassword = () => {
    dispatch(setBooleanValue({type: 'UPDATEPASSWORD', booleanValue: true}));
  };
  return (
    <View style={formStyles.container}>
      <View style={formStyles.fullName}>
        <View style={{flex: 1}}>
          <TextInputCustom
            label={'Name'}
            onChangeText={text => {
              console.log('text:::', text);
            }}
            keyboardType="email-address"
            placeholder="First name"
          />
        </View>
        <View style={{flex: 1}}>
          <TextInputCustom
            label=""
            onChangeText={text => {
              console.log('text:::', text);
            }}
            keyboardType="default"
            defaultValue={undefined}
            placeholder="Last name"
          />
        </View>
      </View>
      <TextInputCustom
        label={'DATE OF BIRTH'}
        onChangeText={text => {
          console.log('text:::', text);
        }}
        keyboardType="default"
        defaultValue={undefined}
        placeholder="MM/DD/YY"
      />
      <TextInputCustom
        label={'EMAIL'}
        onChangeText={text => {
          console.log('text:::', text);
        }}
        keyboardType="email-address"
        defaultValue="example@gmail.com"
      />
      <TextInputCustom
        label={'PASSWORD'}
        defaultValue="Ark123@@$$"
        secureTextEntry
        rightIcon={
          <IconCustom
            iconName={'create-outline'}
            iconSize={20}
            iconColor="black"
            onClick={OpenUpdatePassword}
          />
        }
      />
      <View>
        <RadioCustom dataRender={dataRender} />
      </View>
      <View>
        <ChangePassword />
      </View>
    </View>
  );
};
export default UpdateProfilePage;

const formStyles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    width: '100%',
  },
  fullName: {
    flexDirection: 'row',
    gap: 0,
    width: '100%',
    justifyContent: 'space-between',
  },
});
