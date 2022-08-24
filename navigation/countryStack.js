import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CountryScreen from '../Screens/Restaurant/CountryScreen';
import CountryDetail from '../Screens/Restaurant/CountryDetail';
import FetchedDetail from '../Screens/Restaurant/FetchedDetail';

const Stack = createNativeStackNavigator();

const CountryStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='CountryScreen' component={CountryScreen} />
      <Stack.Screen name='CountryDetail' component={CountryDetail} />
      <Stack.Screen name='OriginMealDetails' component={FetchedDetail} />
    </Stack.Navigator>
  );
};

export default CountryStack;
