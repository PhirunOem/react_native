import React, {Component} from 'react';
import {View} from 'react-native';
import {AccessToken, LoginButton} from 'react-native-fbsdk-next';

export default class LoginWithFacebook extends Component {
  render() {
    return (
      <View>
        <LoginButton
          onLoginFinished={(error: any, result) => {
            if (error) {
              console.log('login has error: ' + result);
            } else if (result.isCancelled) {
              console.log('login is cancelled.');
            } else {
              AccessToken.getCurrentAccessToken().then(data => {
                console.log(data);
              });
            }
          }}
          onLogoutFinished={() => console.log('logout.')}
        />
      </View>
    );
  }
}
