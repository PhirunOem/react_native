import React from 'react';
import {
  HomeScreen,
  CategoryScreen,
  FavoritePage,
  ShoppingCardPage,
} from '../../screens';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  homeTabOptions,
  categoryTabOptions,
  shoppingTabOptions,
  favoriteOptions,
} from './tabOptions';
import {CommonActions} from '@react-navigation/native';
import {BottomTabNavigationOptions} from '@react-navigation/bottom-tabs';

export default function BottomNavigation() {
  const globleOptions: BottomTabNavigationOptions = {
    tabBarActiveBackgroundColor: '#007B82',
    tabBarActiveTintColor: '#00F0FF',
    tabBarInactiveTintColor: 'white',
    tabBarInactiveBackgroundColor: '#007B82',
    tabBarStyle: {
      height: 106,
    },
    tabBarItemStyle: {
      paddingBottom: 30,
      paddingTop: 30,
    },
  };
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      backBehavior="history"
      initialRouteName="Home"
      screenOptions={{
        ...globleOptions,
      }}>
      <Tab.Screen name="Home" component={HomeScreen} options={homeTabOptions} />
      <Tab.Screen
        name="Categories"
        component={CategoryScreen}
        options={{...categoryTabOptions}}
        listeners={({navigation, route}) => ({
          //this action is invoked when user click on tab button and route them to initail screen we define
          tabPress: e => {
            navigation.navigate('Categories', {
              screen: 'Category',
              initail: true,
            });
          },
        })}
      />
      <Tab.Screen
        name="ShoppingCard"
        component={ShoppingCardPage}
        options={shoppingTabOptions}
      />
      <Tab.Screen
        name="Favorites"
        component={FavoritePage}
        options={favoriteOptions}
      />
    </Tab.Navigator>
  );
}
