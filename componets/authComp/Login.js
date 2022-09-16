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

export default function Login({ setPage }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [visible, setVisibility] = useState(true);
  const icon = !visible ? 'eye-slash' : 'eye';

  const onSubmit = () => {
    if (email == '' || password == '') {
      Alert.alert('Missing Data', 'Provide all the required Data for login');
      return;
    }
    Alert.alert('Credentials', `Email: ${email}/n Password: ${password}`);
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
              />
            </View>
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
