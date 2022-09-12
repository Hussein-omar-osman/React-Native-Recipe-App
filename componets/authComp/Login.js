import React from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
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
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
