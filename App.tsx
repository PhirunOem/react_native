import React, {useEffect} from 'react';
import {StyleSheet, StatusBar, AppState} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {theme, userModels} from './src/core';
import BootSplash from 'react-native-bootsplash';
import {BottomNavigation} from './src/components';
import {Provider, useDispatch} from 'react-redux';
import {store} from './src/redux';
import {auth} from './src/firebase/config';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const init = async () => {
      // Perform any initial setup or async tasks here
    };

    init().finally(async () => {
      await BootSplash.hide({fade: true});
      console.log('BootSplash has been hidden successfully');
    });
  }, []);

  useEffect(() => {
    const unsubscribe = auth().onAuthStateChanged(userInfo => {
      if (userInfo) {
        const serializeUser: userModels = {
          userName: userInfo.displayName,
          email: userInfo.email,
          profileURL: userInfo.photoURL,
          phoneNumber: userInfo.phoneNumber,
          password: '',
          isAdmin: false,
        };
        // dispatch(setUserInfo(serializeUser));
        console.log('user infor :::::::::::::', userInfo);
      }
    });
    return () => unsubscribe();
  }, [dispatch]);

  return (
    <NavigationContainer theme={theme}>
      <StatusBar barStyle="default" backgroundColor={theme.colors.background} />
      <BottomNavigation />
    </NavigationContainer>
  );
};

const AppProvider = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default AppProvider;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#03A1AB',
  },
  text: {
    fontSize: 30,
  },
});
