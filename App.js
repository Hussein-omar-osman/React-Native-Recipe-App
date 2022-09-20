import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTabsNavigation from './navigation/BottomTabsNavigation';
import BottomSheetProvider from './context/BottomSheetContext';
import { StatusBar } from 'expo-status-bar';
import UserProvider from './context/UserContext';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <UserProvider>
        <BottomSheetProvider>
          <BottomTabsNavigation />
        </BottomSheetProvider>
      </UserProvider>
      <StatusBar style='auto' />
    </NavigationContainer>
  );
};

export default App;
