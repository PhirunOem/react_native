import React from 'react';
import {theme} from '../../core';
import {BottomTabNavigationOptions} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  CategoryHeaderTitle,
  HomeHeaderTitle,
  ShoppingCartHeaderTitle,
  FavoriteHeaderTitle,
} from '../headerTitle';
import {Text} from 'react-native-animatable';
import {StatusBar} from 'react-native';
import {getHeaderTitle} from '@react-navigation/elements';

const homeTabOptions: BottomTabNavigationOptions = {
  tabBarIcon: ({color}: any) => (
    <Icon name="home-outline" color={color} size={24} />
  ),
  headerTitle: (props: any) => <HomeHeaderTitle {...props} />,
  headerStatusBarHeight: 0,
  headerTitleAllowFontScaling: true,
  headerStyle: {
    backgroundColor: theme.colors.background,
  },
  headerShadowVisible: false,
  headerTitleContainerStyle: {
    paddingHorizontal: 0,
  },
  headerLeftContainerStyle: {
    paddingVertical: 0,
  },
  lazy: false,
};
const categoryTabOptions: BottomTabNavigationOptions = {
  tabBarIcon: ({color}) => <Icon name="grid-outline" color={color} size={20} />,
  headerShadowVisible: false,
  header: ({navigation, route, options, back}: any) => {
    const props = {...navigation, route: route.params, back: back};
    return <CategoryHeaderTitle {...props} />;
  },
  lazy: false,
};
const shoppingTabOptions: BottomTabNavigationOptions = {
  tabBarIcon: ({color}) => <Icon name="cart-outline" color={color} size={24} />,
  tabBarBadge: 10,
  tabBarBadgeStyle: {
    borderColor: '#007B82',
    fontSize: 10,
  },
  headerShadowVisible: false,
  headerStyle: {
    backgroundColor: theme.colors.background,
  },
  headerTitle: (props: any) => <ShoppingCartHeaderTitle {...props} />,
};
const favoriteOptions: BottomTabNavigationOptions = {
  tabBarIcon: ({color}) => (
    <Icon name="heart-outline" color={color} size={20} />
  ),
  tabBarBadge: 10,
  tabBarBadgeStyle: {
    borderColor: '#007B82',
    fontSize: 10,
  },
  headerShadowVisible: false,
  headerStyle: {
    backgroundColor: theme.colors.background,
  },
  headerTitle: (props: any) => <FavoriteHeaderTitle {...props} />,
};

export {
  homeTabOptions,
  categoryTabOptions,
  shoppingTabOptions,
  favoriteOptions,
};
