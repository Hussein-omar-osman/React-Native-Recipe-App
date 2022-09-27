import React, { useState, createContext, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { app } from '../firebase/firebaseConfig';

export const UserContext = createContext();

const UserProvider = (props) => {
  const auth = getAuth(app);
  const { expoPushToken, sendPushNotification } = props;
  const [image, setImage] = useState(null);

  const [user, setUser] = useState(null);
  const [firstLogin, setFirstLogin] = useState(false);

  const storeData = async (value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem('@user', jsonValue);
      setFirstLogin((prev) => !prev);
    } catch (e) {
      // saving error
      console.log('Cannot store user information');
    }
  };

  async function getData() {
    try {
      const jsonValue = await AsyncStorage.getItem('@user');
      // console.log(JSON.parse(jsonValue));
      // console.log(typeof JSON.parse(jsonValue));
      if (jsonValue != null) setUser(JSON.parse(jsonValue));
      // return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      // error reading value
      console.log(e);
    }
  }

  const removeData = async () => {
    await AsyncStorage.removeItem('@user');
    setFirstLogin(false);
  };

  useEffect(() => {
    getData();
  }, [firstLogin]);

  return (
    <UserContext.Provider
      value={{
        user: user,
        setUser: setUser,
        storeData: storeData,
        removeData: removeData,
        setFirstLogin: setFirstLogin,
        sendPushNotification: sendPushNotification,
        expoPushToken: expoPushToken,
        image: image,
        setImage: setImage,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};
export default UserProvider;
