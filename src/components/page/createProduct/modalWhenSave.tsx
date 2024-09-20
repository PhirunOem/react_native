import {ModalCustom} from 'components';
import {theme} from '../../../core';
import {ActivityIndicator, Text, View} from 'react-native';

interface Props {
  isVisible: boolean;
}
const ModalWhenSave = (props: Props) => {
  return (
    <ModalCustom
      {...props}
      isStatusBarTranslucent
      isVisible={props.isVisible}
      children={
        <View style={{justifyContent: 'center', flex: 1, alignItems: 'center'}}>
          <View style={{alignItems: 'center'}}>
            <ActivityIndicator size="large" color={theme.colors.background} />
            <Text style={{fontSize: 30, fontWeight: 'bold', color: 'red'}}>
              {'Saving...'}
            </Text>
          </View>
        </View>
      }
    />
  );
};

export default ModalWhenSave;
