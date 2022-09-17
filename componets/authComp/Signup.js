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
} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import { authentication } from '../../firebase/firebaseConfig';
// import { getAuth } from 'firebase/auth';

export default function Signup({ setPage }) {
  // const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [conPassword, setConPassword] = useState('');
  const [error, setError] = useState('');
  const [visible1, setVisibility1] = useState(true);
  const [visible2, setVisibility2] = useState(true);
  const icon1 = !visible1 ? 'eye-slash' : 'eye';
  const icon2 = !visible2 ? 'eye-slash' : 'eye';

  const handleSignUp = () => {
    if (email == '' || password == '' || conPassword == '') {
      setError('Fill all the inputs');
      return;
    }
    if (password !== conPassword) {
      setError("Password & Re-password don't match");
      return;
    }
    console.log('Success the password match');
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
                style={[styles.loginFormTextInput, { flex: 2 }]}
                secureTextEntry={visible1}
                value={password}
                onChangeText={(text) => setPassword(text)}
              />
              <Icon
                name={icon1}
                color={'#9e9e9e'}
                size={24}
                onPress={() => {
                  setVisibility1((prev) => !prev);
                  Vibration.vibrate(100);
                }}
                style={{ backgroundColor: '#fff', padding: 7 }}
              />
            </View>

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <TextInput
                placeholder='Confirm Password'
                placeholderColor='#c4c3cb'
                style={[styles.loginFormTextInput, { flex: 2 }]}
                secureTextEntry={visible2}
                value={conPassword}
                onChangeText={(text) => setConPassword(text)}
              />
              <Icon
                name={icon2}
                color={'#9e9e9e'}
                size={24}
                onPress={() => {
                  setVisibility2((prev) => !prev);
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
            <TouchableOpacity style={styles.loginButton} onPress={handleSignUp}>
              <Text style={{ color: '#fff', fontSize: 20, fontWeight: '700' }}>
                Register
              </Text>
            </TouchableOpacity>
            <View
              style={{
                flexDirection: 'row',
                marginHorizontal: 80,
                marginVertical: 15,
              }}
            >
              <Text style={{ fontSize: 15 }}>Have An Account? {` `}</Text>
              <TouchableOpacity onPress={() => setPage('login')}>
                <Text style={{ color: 'blue', fontSize: 15 }}>Login</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
