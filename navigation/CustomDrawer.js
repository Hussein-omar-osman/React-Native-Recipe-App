import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import React, { useContext } from 'react';
import { View, Text, Image, TouchableOpacity, Share } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { BottomSheetContext } from '../context/BottomSheetContext';
import { useNavigation } from '@react-navigation/native';

const CustomDrawer = (props) => {
  const { setIsOpen } = useContext(BottomSheetContext);
  const navigation = useNavigation();
  const onShare = async () => {
    try {
      const result = await Share.share({
        message:
          'Receta App| A recepe app | https://github.com/Hussein-omar-osman/React-Native-Recipe-App#:~:text=expo.dev/%40hussein%2Domar/receta%2Dapp%3Fservicetype%3Dclassic%26distribution%3Dexpo%2Dgo',
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{ backgroundColor: 'tomato' }}
      >
        <View style={{ padding: 20 }}>
          <Image
            source={require('../assets/unknow.png')}
            style={{
              marginBottom: 10,
              width: 80,
              height: 80,
              borderRadius: 40,
            }}
          />
          <Text
            style={{
              color: 'white',
              fontSize: 18,
            }}
          >
            @unKnown
          </Text>
        </View>
        <View style={{ backgroundColor: '#fff', flex: 1, paddingTop: 20 }}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
      <View style={{ padding: 10, borderTopWidth: 1, borderColor: '#ccc' }}>
        <TouchableOpacity
          style={{ paddingVertical: 15 }}
          onPress={() => {
            props.navigation.closeDrawer();
            onShare();
          }}
        >
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            <Entypo name='share' size={22} color='black' />
            <Text
              style={{
                color: '#333',
                fontSize: 15,
                marginLeft: 5,
                fontWeight: 'bold',
              }}
            >
              Tell a friend
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ paddingVertical: 15 }}
          onPress={() => {
            props.navigation.closeDrawer();
            setIsOpen(true);
            navigation.navigate('Home');
          }}
        >
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            <Entypo name='log-out' size={22} color='black' />
            <Text
              style={{
                color: '#333',
                fontSize: 15,
                marginLeft: 5,
                fontWeight: 'bold',
              }}
            >
              Sign out
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CustomDrawer;
