import {Text, View} from 'react-native';
import CategoryHeaderActions from './categoryHeaderActions';
export default function CategoryPage({navigation}: any) {
  return (
    <View style={{height: '100%'}}>
      <CategoryHeaderActions {...navigation} />
    </View>
  );
}
