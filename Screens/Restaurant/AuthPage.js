import React, { useState } from 'react';
import {
  Alert,
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  Pressable,
  View,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Login from '../../componets/authComp/Login';
import Signup from '../../componets/authComp/Signup';
// import { Button, SocialIcon } from 'react-native-elements';
// import * as Facebook from 'expo-facebook';

const appId = '1047121222092614';

export default function AuthPage() {
  const [page, setPage] = useState('login');
  const onLoginPress = () => {};

  // const onFbLoginPress = async () => {
  //   try {
  //     await Facebook.initializeAsync({
  //       appId,
  //     });
  //     const { type, token } = await Facebook.logInWithReadPermissionsAsync({
  //       permissions: ['public_profile', 'email'],
  //     });
  //     if (type === 'success') {
  //       const response = await fetch(
  //         `https://graph.facebook.com/me?access_token=${token}`
  //       );
  //       Alert.alert('Logged in!', `Hi ${(await response.json()).name}!`);
  //     }
  //   } catch ({ message }) {
  //     Alert.alert(`Facebook Login Error: ${message}`);
  //   }
  // };

  if (page === 'register') {
    return <Signup />;
  }
  return <Login />;
}

const styles = StyleSheet.create({
  containerView: {
    flex: 1,
    alignItems: 'center',
  },
  loginScreenContainer: {
    flex: 1,
  },
  logoText: {
    fontSize: 40,
    fontWeight: '800',
    marginTop: 150,
    marginBottom: 30,
    textAlign: 'center',
  },
  loginFormView: {
    flex: 1,
  },
  loginFormTextInput: {
    height: 43,
    fontSize: 14,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#eaeaea',
    backgroundColor: '#fafafa',
    paddingLeft: 10,
    marginTop: 5,
    marginBottom: 5,
  },
  loginButton: {
    backgroundColor: 'tomato',
    borderRadius: 5,
    height: 45,
    marginTop: 10,
    width: 350,
    alignItems: 'center',
    justifyContent: 'center',
  },
  fbLoginButton: {
    height: 45,
    marginTop: 10,
    backgroundColor: 'transparent',
  },
});
