import React from 'react';
// import DATA from './config/Restaurant/DATA';
// import recipes from './config/Restaurant/Recipes';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../Screens/Restaurant/HomeScreen';
import RecipeDetailScreen from '../Screens/Restaurant/RecipeDetailScreen';

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='Home' component={HomeScreen} />
      <Stack.Screen name='Details' component={RecipeDetailScreen} />
    </Stack.Navigator>
  );
};

export default HomeStack;
{
  /* <RecipeDetailScreen recipe={recipes[0]} />; */
}
