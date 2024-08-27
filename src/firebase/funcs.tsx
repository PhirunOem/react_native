import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {useInitializeApp} from './config';
import {userModels} from '../core';

interface signUpProps {
  email: string;
  password: string;
}

async function handleUserSignUpWithEmail(props: signUpProps) {
  try {
    // ::: intailize app instance before we make sign up new user action :::
    await useInitializeApp();
    const userCredential = await auth().createUserWithEmailAndPassword(
      props.email,
      props.password,
    );
    return {isError: false, data: userCredential, loading: true};
  } catch (error: any) {
    const errorMsg = error.message as string;
    if (errorMsg.includes('email address is already in use') == true)
      return {
        isError: true,
        data: 'The email address is already in used.',
        loading: true,
      };
    return {
      isError: true,
      data: 'Something went wrong, please try again.',
      loading: true,
    };
  }
}

interface setUserProps {
  params: userModels;
  collectionName: string;
}
async function handleSetUserToDatabase(props: setUserProps) {
  await firestore()
    .collection(props.collectionName)
    .add(props.params)
    .then(data => {
      return data;
    })
    .catch(error => {
      return error;
    });
}

async function handleSignIn(params: signUpProps) {
  await auth()
    .signInWithEmailAndPassword(params.email, params.password)
    .then(value => console.log(value.user.metadata))
    .catch(error => {
      console.log(error);
    });
}
export {handleUserSignUpWithEmail, handleSetUserToDatabase, handleSignIn};
