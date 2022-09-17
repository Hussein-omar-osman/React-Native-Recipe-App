import React, { useState } from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
  TouchableOpacity,
  Vibration,
  Alert,
} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { app } from '../../firebase/firebaseConfig';

export default function Login({ setPage }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [visible, setVisibility] = useState(true);
  const [error, setError] = useState('');
  const auth = getAuth(app);

  const icon = !visible ? 'eye-slash' : 'eye';

  const onSubmit = () => {
    if (email == '' || password == '') {
      setError('Provide all the required Credentials to login');
      return;
    }

    setError('');
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        setError('');
        Alert.alert('Success', `Email: ${email} successful login`);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(error.message);
        console.log(error);
      });
  };

  return (
    <KeyboardAvoidingView style={styles.containerView} behavior='padding'>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.loginScreenContainer}>
          <View style={styles.loginFormView}>
            <Text style={styles.logoText}>Receta</Text>
            <TextInput
              placeholder='Email'
              placeholderColor='#c4c3cb'
              autoCapitalize='none'
              style={styles.loginFormTextInput}
              value={email}
              onChangeText={(text) => setEmail(text)}
            />
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <TextInput
                placeholder='Password'
                placeholderColor='#c4c3cb'
                autoCapitalize='none'
                style={[styles.loginFormTextInput, { flex: 2 }]}
                secureTextEntry={visible}
                value={password}
                onChangeText={(text) => setPassword(text)}
              />
              <Icon
                name={icon}
                color={'#9e9e9e'}
                size={24}
                onPress={() => {
                  setVisibility((prev) => !prev);
                  Vibration.vibrate(100);
                }}
                style={{ backgroundColor: '#fff', padding: 7 }}
              />
            </View>
            {error && (
              <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ color: 'red', fontSize: 16 }}>{error}</Text>
              </View>
            )}
            <TouchableOpacity style={styles.loginButton} onPress={onSubmit}>
              <Text style={{ color: '#fff', fontSize: 20, fontWeight: '700' }}>
                Login
              </Text>
            </TouchableOpacity>
            <View
              style={{
                flexDirection: 'row',
                marginHorizontal: 80,
                marginVertical: 15,
              }}
            >
              <Text style={{ fontSize: 15 }}>Need An Account? {` `}</Text>
              <TouchableOpacity onPress={() => setPage('register')}>
                <Text style={{ color: 'blue', fontSize: 15 }}>Signup</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
