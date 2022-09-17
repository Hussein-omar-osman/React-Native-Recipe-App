import React, { useState, createContext } from 'react';
// import AsyncStorage from '@react-native-async-storage/async-storage';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { app } from '../firebase/firebaseConfig';

export const UserContext = createContext();

const UserProvider = (props) => {
  const auth = getAuth(app);

  const [user, setUser] = useState({});
  // console.log(auth.currentUser + ' from user provider');

  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      const uid = user.uid;
      setUser(user);
      // ...
    } else {
      // User is signed out
      // ...
    }
  });
  console.log(user);

  // const storeData = async (value) => {
  //   try {
  //     const jsonValue = JSON.stringify(value);
  //     await AsyncStorage.setItem('@user', jsonValue);
  //   } catch (e) {
  //     // saving error
  //     console.log('Cannot store user information');
  //   }
  // };

  // async function getData() {
  //   try {
  //     const jsonValue = await AsyncStorage.getItem('@storage_Key');
  //     return jsonValue != null ? JSON.parse(jsonValue) : null;
  //   } catch (e) {
  //     // error reading value
  //     console.log('User information not found');
  //   }
  // }

  return (
    <UserContext.Provider
      value={{
        user: user,
        setUser: setUser,
        // storeData: storeData,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};
export default UserProvider;
