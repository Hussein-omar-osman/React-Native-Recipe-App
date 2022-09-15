import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import React, { useContext } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { BottomSheetContext } from '../context/BottomSheetContext';

const CustomDrawer = (props) => {
  const { setIsOpen } = useContext(BottomSheetContext);
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
            setIsOpen(true);
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
          onPress={() => props.navigation.closeDrawer()}
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
