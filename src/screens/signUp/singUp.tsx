import React, {useEffect, useReducer, useState} from 'react';
import {Text, View, Image} from 'react-native';
import {styles} from './index';
import {ButtonCustom, CheckBoxCustom} from '../../components';
import {Link} from '@react-navigation/native';
import {theme} from '../../core';
import {useComplexStateWithReducer} from '../../hooks';
import {
  handleUserSignUpWithEmail,
  handleSetUserToDatabase,
} from '../../firebase';
import validator from 'validator';
import {Base64} from 'js-base64';
const SignUpPage = ({navigation}: any) => {
  const [state, setProperty] = useComplexStateWithReducer({
    name: '',
    email: '',
    password: '',
    isAdmin: false,
    isCheck: false,
  });
  async function handleSubmit() {
    const validate = validator.isEmail(state.email);
    setProperty('error', null);
    setProperty('loading', true);
    setProperty('isError', false);
    if (
      validator.isEmpty(state.name) ||
      validator.isEmpty(state.email) ||
      validator.isEmpty(state.password)
    ) {
      setProperty('loading', false);
      setProperty('isError', true);
      setProperty('error', 'All fields are required!');
    } else if (validate === false) {
      setProperty('isError', true);
      setProperty('error', 'Invalid email');
      setProperty('loading', false);
    } else {
      setProperty('error', null);
      setProperty('loading', true);
      const data = await handleUserSignUpWithEmail({
        email: state.email,
        password: state.password,
      });
      if (data.isError == true) {
        setProperty('isError', true);
        setProperty('error', data.data);
        setProperty('loading', false);
      } else {
        setProperty('loading', false);
        await handleSetUserToDatabase({
          collectionName: 'users',
          params: {
            name: state.name,
            email: state.email,
            password: Base64.encode(state.password),
            phoneNumber: '',
            profile: '',
            isAdmin: state.isAdmin,
          },
        });
        navigation.navigate('Home');
      }
    }
  }
  const rui = '../../assets/images/logo.png';
  return (
    <View style={styles.constainter}>
      <Image source={require(rui)} style={styles.image}></Image>
      <Text style={styles.headerText}>Create Account </Text>
      <TextInputCustom
        textContentType="name"
        placeholder="Name"
        onChangeText={text => {
          setProperty('name', text);
          setProperty('error', null);
          setProperty('loading', false);
          setProperty('isError', false);
          // console.log(text);
          // HandleSignUp(text);
        }}
        blurOnSubmit={true}
      />
      <TextInputCustom
        textContentType="emailAddress"
        placeholder="Email"
        onChangeText={text => {
          setProperty('email', text);
          setProperty('error', null);
          setProperty('loading', false);
          setProperty('isError', false);
        }}
        onSubmitEditing={() => {}}
        blurOnSubmit={true}
      />
      <TextInputCustom
        textContentType="password"
        placeholder="Password"
        onChangeText={text => {
          setProperty('password', text);
          setProperty('error', null);
          setProperty('loading', false);
          setProperty('isError', false);
        }}
        onSubmitEditing={() => {}}
        blurOnSubmit={true}
        secureTextEntry={true}
      />
      {state.isError == true ? (
        <Text style={{color: 'red'}}>{state.error}</Text>
      ) : (
        ''
      )}
      <View style={styles.middleAction}>
        <CheckBoxCustom
          onClick={() => {
            const check = !state.isCheck;
            setProperty('isCheck', check);
            if (state.isCheck == false) {
              setProperty('isAdmin', true);
            } else setProperty('isAdmin', false);
          }}
          title="Sign up as admin"
          isCheck={state.isCheck}
          checkBoxColor={theme.colors.text}
        />
        <Text>
          Having account ?{' '}
          <Link to={'/'} style={styles.loginText}>
            Login
          </Link>
        </Text>
      </View>
      <View style={styles.actionSignUp}>
        <ButtonCustom
          onPress={handleSubmit}
          title={state.loading ? 'Loading' : 'Register'}
          disable={state.loading}
        />
      </View>
      {/* ==============other options that user can use to sign up their account ==========*/}
      <Text style={styles.bottomText}>Or Log in with</Text>
      <View style={styles.logInWith}>
        <ButtonCustom
          onPress={() => {
            console.log('This feature is coming up soon!');
          }}
          title="Google"
          iconName="google"
          isIcon={true}
        />
        <ButtonCustom
          onPress={() => {
            console.log('This feature is coming up soon!');
          }}
          title="Facebook"
          iconName="facebook"
          isIcon={true}
        />
      </View>
    </View>
  );
};

import {StyleSheet, TextInput, TextInputProps} from 'react-native';
const TextInputCustom = (props: TextInputProps) => {
  return (
    <TextInput
      {...props}
      placeholder={props['placeholder']}
      style={stylesInput.containerInput}
    />
  );
};
const stylesInput = StyleSheet.create({
  containerInput: {
    backgroundColor: theme.colors.background,
    elevation: 1,
    borderColor: theme.colors.primary,
    borderWidth: 1,
    padding: 8,
    paddingLeft: 10,
    borderRadius: 10,
    width: '100%',
    color: theme.colors.text,
  },
});

export default SignUpPage;
