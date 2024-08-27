import {View, Dimensions} from 'react-native';
import React from 'react';
import {ProductCardCustom} from '../../components';
import {useDispatch, useSelector} from 'react-redux';
import {setBooleanValue} from '../../redux/slice';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  ProductDetailPage,
  ListAllTypeOfProductType,
  ListAllProductOfType,
} from '../../components/page';
import CategoryPage from './categoryPage';
export default function CategoryScreen() {
  const screenHeight = Dimensions.get('window').height;
  const screenWidth = Dimensions.get('window').width;
  const dispatch = useDispatch();
  const isFavorite = useSelector((state: any) => state.action.isAddToFavorite);

  const addToFavorite = () => {
    dispatch(
      setBooleanValue({type: 'ADDTOFAVORITE', booleanValue: !isFavorite}),
    );
  };
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Category"
        component={CategoryPage}
        options={{headerShown: false, animation: 'none'}}
      />
      <Stack.Screen
        name="ListTypeOfProductType"
        component={ListAllTypeOfProductType}
        options={{headerShown: false, animation: 'none'}}
      />
      <Stack.Screen
        name="ListProductOfType"
        component={ListAllProductOfType}
        options={{headerShown: false, animation: 'none'}}
      />
      <Stack.Screen
        name="Detail"
        component={ProductDetailPage}
        options={{headerShown: false, animation: 'none'}}
      />
    </Stack.Navigator>
  );
}
