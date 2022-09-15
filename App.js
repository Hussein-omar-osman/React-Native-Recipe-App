import React from 'react';
import RecipeDetailScreen from './Screens/Restaurant/RecipeDetailScreen';
import DATA from './config/Restaurant/DATA';
import recipes from './config/Restaurant/Recipes';
import HomeScreen from './Screens/Restaurant/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from './Screens/Restaurant/WelcomeScreen';
import HomeStack from './navigation/homeStack';
import BottomTabsNavigation from './navigation/BottomTabsNavigation';
import CategoryScreen from './Screens/Restaurant/CategoryScreen';
import BottomSheetProvider from './context/BottomSheetContext';
import { StatusBar } from 'expo-status-bar';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      {/* <HomeStack /> */}
      <BottomSheetProvider>
        <BottomTabsNavigation />
      </BottomSheetProvider>
      <StatusBar />
    </NavigationContainer>
  );
};

export default App;
