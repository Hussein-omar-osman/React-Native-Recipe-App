import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SearchScreen from '../Screens/Restaurant/SearchScreen';
import FetchedDetail from '../Screens/Restaurant/FetchedDetail';

const Stack = createNativeStackNavigator();

const SearchStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='Search' component={SearchScreen} />
      <Stack.Screen name='SearchDetails' component={FetchedDetail} />
    </Stack.Navigator>
  );
};

export default SearchStack;
