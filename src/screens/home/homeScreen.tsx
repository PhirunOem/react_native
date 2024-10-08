import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomePage from './homePage';
import {ProductDetailPage} from '../../components/page';

const Stack = createNativeStackNavigator();

function HomeScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeScreen"
        component={HomePage}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export default HomeScreen;
