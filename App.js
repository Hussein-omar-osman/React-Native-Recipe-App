import React, { createContext, useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTabsNavigation from './navigation/BottomTabsNavigation';
import BottomSheetProvider from './context/BottomSheetContext';
import { StatusBar } from 'expo-status-bar';
// import UserProvider from './context/UserContext';

const Stack = createNativeStackNavigator();
export const UserContext = createContext();

const App = () => {
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

  // console.log(user);
  return (
    <NavigationContainer>
      {/* <HomeStack /> */}
      <UserContext.Provider
        value={{
          user: user,
          setUser: setUser,
          storeData: storeData,
          removeData: removeData,
          setFirstLogin: setFirstLogin,
        }}
      >
        <BottomSheetProvider>
          <BottomTabsNavigation />
        </BottomSheetProvider>
      </UserContext.Provider>
      <StatusBar style='auto' />
    </NavigationContainer>
  );
};

export default App;
