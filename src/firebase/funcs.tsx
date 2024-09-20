import {auth, firestore} from './config';
import {userModels} from '../core';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import {useDispatch} from 'react-redux';
import {removeUserInfo} from '../redux/userSlice';
import {LoginManager, AccessToken, Settings} from 'react-native-fbsdk-next';

interface signUpProps {
  email: string;
  password: string;
}

async function handleUserSignUpWithEmail(props: signUpProps) {
  try {
    // ::: intailize app instance before we make sign up new user action :::
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
//set user to database after user sign up their new accounts, because when user sign up, firebase doesn't set it automatically
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

async function handleSignInWithFacebook() {
  // Settings.initializeSDK();
  // Settings.setAppID('641634538454754');
  // const result = await LoginManager.logInWithPermissions([
  //   'public_profile',
  //   'email',
  // ]);

  // if (result.isCancelled) {
  //   throw 'User cancelled the login process';
  // }

  try {
    const result = await LoginManager.logInWithPermissions([
      'public_profile',
      'email',
    ]);
    console.log(':::::: result ::::::::::', result);

    if (result.isCancelled) {
      throw 'User cancelled the login process';
    }
    // Once signed in, get the users AccessToken
    // const data = await AccessToken.getCurrentAccessToken();
    // if (data) {
    //   console.log(':::::: data ::::::::::', data);
    // } else {
    //   throw 'error occur ::::::::::::;';
    // }
  } catch (error) {
    console.log('Facebook login or Firebase credential failed:', error);
  }
}
async function handleSignInWithGoogle(idToken: string | undefined | null) {
  try {
    if (idToken) {
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);
      await auth().signInWithCredential(googleCredential);
    }
  } catch (error: any) {
    if (error.code === statusCodes.SIGN_IN_CANCELLED) {
      console.log('User cancelled the login flow');
    } else if (error.code === statusCodes.IN_PROGRESS) {
      console.log('Operation is in progress already');
    } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
      console.log('Play services not available or outdated');
    } else {
      console.error('Error during Google Sign-In:', error);
    }
  }
}
// Handle the button press
async function handleSignInWithPhoneNumber() {
  console.log('::::::::: called log in with phone number ::::::');

  const confirmation = await auth().signInWithPhoneNumber(
    '+855 96-259-9252',
    true,
  );
  // setConfirm(confirmation);
  console.log(':::::::: confirmation :::::::::', confirmation);
}

async function handleSignOut() {
  await auth().signOut();
}
export {
  handleUserSignUpWithEmail,
  handleSetUserToDatabase,
  handleSignIn,
  handleSignInWithGoogle,
  handleSignInWithPhoneNumber,
  handleSignOut,
  handleSignInWithFacebook,
};
