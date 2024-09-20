import firebase from '@react-native-firebase/app';
import {storage} from '@react-native-firebase/storage';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {Platform} from 'react-native';
const androidConfig = {
  apiKey: 'AIzaSyCZ5wltwjWZmlYslxJgc8a7uwrj_NUJcH8',
  authDomain: 'reactnativetodolist-f68e0.firebaseapp.com',
  databaseURL: 'https://reactnativetodolist-f68e0.firebaseio.com',
  projectId: 'reactnativetodolist-f68e0',
  storageBucket: 'reactnativetodolist-f68e0.appspot.com',
  messagingSenderId: '214409186301',
  appId: '1:214409186301:android:0b26805881080440882794',
};
const config = {};
async function useInitializeApp() {
  try {
    if (!firebase.apps.length)
      await firebase.initializeApp(
        Platform.OS == 'android' ? androidConfig : '',
        config,
      );
    else console.log('::::::::: App already initialized :::::::::: ');
  } catch (error) {
    console.log(':::::::::: error initialize firebase :::::::: ', error);
    throw error;
  }
}
useInitializeApp();
export {storage, auth, firestore};
