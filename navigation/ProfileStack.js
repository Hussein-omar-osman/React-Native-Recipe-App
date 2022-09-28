import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProfileScreen from '../Screens/Restaurant/Profile';
import CameraComp from '../Screens/Restaurant/CameraComp';

const Stack = createNativeStackNavigator();

const ProfileStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='ProfileScreen' component={ProfileScreen} />
      <Stack.Screen name='Camera' component={CameraComp} />
    </Stack.Navigator>
  );
};

export default ProfileStack;
