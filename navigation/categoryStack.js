import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CategoryScreen from '../Screens/Restaurant/CategoryScreen';
import CategoryDetail from '../Screens/Restaurant/CategoryDetail';
import FetchedDetail from '../Screens/Restaurant/FetchedDetail';

const Stack = createNativeStackNavigator();

const CategoryStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='CategoryScreen' component={CategoryScreen} />
      <Stack.Screen name='CategoryDetail' component={CategoryDetail} />
      <Stack.Screen name='MealDetails' component={FetchedDetail} />
    </Stack.Navigator>
  );
};

export default CategoryStack;
