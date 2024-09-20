import * as Keychain from 'react-native-keychain';

// Storing the token securely
const storeToken = async (token: any) => {
  await Keychain.setGenericPassword('userToken', token);
};

// Retrieving the token securely
const getToken = async () => {
  const credentials = await Keychain.getGenericPassword();
  return credentials ? credentials.password : null;
};

// Deleting the token securely (on logout)
const deleteToken = async () => {
  await Keychain.resetGenericPassword();
};
