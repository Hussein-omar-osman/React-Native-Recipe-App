import React from 'react';
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
// import { Button, SocialIcon } from 'react-native-elements';
// import * as Facebook from 'expo-facebook';

const appId = '1047121222092614';

export default function AuthPage() {
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

  return (
    <KeyboardAvoidingView style={styles.containerView} behavior='padding'>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.loginScreenContainer}>
          <View style={styles.loginFormView}>
            <Text style={styles.logoText}>Receta</Text>
            <TextInput
              placeholder='Username'
              placeholderColor='#c4c3cb'
              style={styles.loginFormTextInput}
            />
            <TextInput
              placeholder='Password'
              placeholderColor='#c4c3cb'
              style={styles.loginFormTextInput}
              secureTextEntry={true}
            />
            <TouchableOpacity style={styles.loginButton}>
              <Text style={{ color: '#fff', fontSize: 20, fontWeight: '700' }}>
                Login
              </Text>
            </TouchableOpacity>
            {/* <Button
              buttonStyle={styles.loginButton}
              onPress={() => onLoginPress()}
              title='Login'
            />
            <Button
              containerStyle={styles.fbLoginButton}
              type='clear'
              onPress={() => onFbLoginPress()}
              title='Login With Facebook'
            /> */}
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
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
