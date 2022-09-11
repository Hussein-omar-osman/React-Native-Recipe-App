import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const AuthPage = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <View>
        <Text>Authentication page</Text>
      </View>
    </SafeAreaView>
  );
};

export default AuthPage;
