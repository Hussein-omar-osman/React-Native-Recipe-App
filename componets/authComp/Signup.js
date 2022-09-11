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
import styles from './styles';

export default function Signup() {
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
              placeholder='Email'
              placeholderColor='#c4c3cb'
              style={styles.loginFormTextInput}
            />
            <TextInput
              placeholder='Password'
              placeholderColor='#c4c3cb'
              style={styles.loginFormTextInput}
              secureTextEntry={true}
            />
            <TextInput
              placeholder='Confirm Password'
              placeholderColor='#c4c3cb'
              style={styles.loginFormTextInput}
              secureTextEntry={true}
            />
            <TouchableOpacity style={styles.loginButton}>
              <Text style={{ color: '#fff', fontSize: 20, fontWeight: '700' }}>
                Register
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
