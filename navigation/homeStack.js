import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../Screens/Restaurant/HomeScreen';
import RecipeDetailScreen from '../Screens/Restaurant/RecipeDetailScreen';
import SideNavigation from './SideNavigation';

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='Drawer' component={SideNavigation} />
      <Stack.Screen name='Details' component={RecipeDetailScreen} />
    </Stack.Navigator>
  );
};

export default HomeStack;
{
  /* <RecipeDetailScreen recipe={recipes[0]} />; */
}
