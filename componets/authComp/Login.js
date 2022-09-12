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

export default function Login() {
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
