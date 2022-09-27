import React, { useContext, useState, useRef } from 'react';
import {
  View,
  SafeAreaView,
  StyleSheet,
  Share,
  TouchableOpacity,
  Platform,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  TextInput,
} from 'react-native';
import {
  Avatar,
  Title,
  Caption,
  Text,
  TouchableRipple,
  Button,
} from 'react-native-paper';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import styles2 from '../../componets/authComp/styles';
import { Entypo, AntDesign } from '@expo/vector-icons';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon2 from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import { UserContext } from '../../context/UserContext';

const ProfileScreen = () => {
  const [edit, setEdit] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const navigation = useNavigation();
  const { user } = useContext(UserContext);
  const trncate = (string) => {
    let index = string.indexOf('@');
    let newString = string.substring(0, index);
    return newString;
  };
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

  if (edit) return <EditProfile setEdit={setEdit} />;

  return (
    <SafeAreaView
      style={[
        styles.container,
        {
          marginTop: Platform.OS === 'android' ? 45 : 0,
          backgroundColor: isOpen ? '#ccc' : 'white',
        },
      ]}
    >
      <View style={styles.userInfoSection}>
        <View style={{ flexDirection: 'row', marginTop: 15 }}>
          <Avatar.Image
            source={require('../../assets/unknow.png')}
            size={80}
            style={{ opacity: isOpen ? 0.3 : 1 }}
          />
          <View style={{ position: 'absolute', top: 60, left: 60 }}>
            <TouchableOpacity onPress={() => setIsOpen(true)}>
              <Entypo name='circle-with-plus' size={24} color='black' />
            </TouchableOpacity>
          </View>
          <View style={{ marginLeft: 20 }}>
            <Title
              style={[
                styles.title,
                {
                  marginTop: 15,
                  marginBottom: 5,
                  fontSize: 20,
                },
              ]}
            >
              {trncate(user?._tokenResponse?.email)}
            </Title>

            <Caption style={styles.caption}>
              @{trncate(user?._tokenResponse?.email)}
            </Caption>
          </View>
        </View>
        <TouchableOpacity
          style={{ position: 'absolute', top: 30, right: 20 }}
          onPress={() => navigation.openDrawer()}
        >
          <Icon name='menu' color='#000' size={35} />
        </TouchableOpacity>
      </View>

      <View style={[styles.userInfoSection, { marginBottom: -10 }]}>
        <View style={styles.row}>
          <Icon name='map-marker-radius' color='#777777' size={20} />
          <Text style={{ color: '#777777', marginLeft: 20 }}>-, -</Text>
        </View>
        <View style={styles.row}>
          <Icon name='phone' color='#777777' size={20} />
          <Text style={{ color: '#777777', marginLeft: 20 }}>+01-*******</Text>
        </View>
        <View style={styles.row}>
          <Icon name='email' color='#777777' size={20} />
          <Text style={{ color: '#777777', marginLeft: 20 }}>
            {user?._tokenResponse?.email}
          </Text>
        </View>
      </View>

      <View style={styles.infoBoxWrapper}>
        <TouchableOpacity
          onPress={() => setEdit(true)}
          style={{
            // flexDirection: 'column',
            alignItem: 'center',
            justifyContent: 'center',
            backgroundColor: 'tomato',
            height: 45,
            padding: 15,
            borderRadius: 20,
          }}
        >
          <Text style={{ color: '#fff' }}>Edit Profile</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.menuWrapper}>
        <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
            <Icon name='heart-outline' color='#FF6347' size={25} />
            <Text style={styles.menuItemText}>Your Favorites</Text>
          </View>
        </TouchableRipple>
        {/* <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
            <Icon name='credit-card' color='#FF6347' size={25} />
            <Text style={styles.menuItemText}>Payment</Text>
          </View>
        </TouchableRipple> */}
        <TouchableRipple onPress={onShare}>
          <View style={styles.menuItem}>
            <Icon name='share-outline' color='#FF6347' size={25} />
            <Text style={styles.menuItemText}>Tell Your Friends</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
            <Icon name='account-check-outline' color='#FF6347' size={25} />
            <Text style={styles.menuItemText}>Support</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
            <Icon2 name='setting' color='#FF6347' size={25} />
            <Text style={styles.menuItemText}>Settings</Text>
          </View>
        </TouchableRipple>
      </View>
      {isOpen && <ImageOptions setIsOpen={setIsOpen} />}
    </SafeAreaView>
  );
};

export default ProfileScreen;

function EditProfile({ setEdit }) {
  return (
    <KeyboardAvoidingView style={styles2.containerView} behavior='padding'>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles2.loginScreenContainer}>
          <View style={styles2.loginFormView}>
            <Text style={styles2.logoText}>Edit</Text>
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: -15,
                marginBottom: 10,
              }}
            >
              <Avatar.Image
                source={require('../../assets/unknow.png')}
                size={100}
              />
            </View>
            <TextInput
              placeholder='Username'
              placeholderColor='#c4c3cb'
              autoCapitalize='none'
              style={[
                styles2.loginFormTextInput,
                { textTransform: 'lowercase' },
              ]}
            />

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <TextInput
                placeholder='Tell'
                placeholderColor='#c4c3cb'
                style={[styles2.loginFormTextInput, { flex: 2 }]}
              />
            </View>

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <TextInput
                placeholder='Location'
                placeholderColor='#c4c3cb'
                style={[styles2.loginFormTextInput, { flex: 2 }]}
              />
            </View>

            <View style={{}}>
              <TouchableOpacity
                style={[styles2.loginButton, { backgroundColor: '#5860f5' }]}
              >
                <Text
                  style={{ color: '#fff', fontSize: 20, fontWeight: '700' }}
                >
                  Save
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles2.loginButton, { backgroundColor: 'red' }]}
                onPress={() => setEdit(false)}
              >
                <Text
                  style={{ color: '#fff', fontSize: 20, fontWeight: '700' }}
                >
                  Cancel
                </Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                flexDirection: 'row',
                marginHorizontal: 80,
                marginVertical: 15,
              }}
            ></View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

function ImageOptions({ setIsOpen }) {
  const sheetRef = useRef(null);
  const snapPoints = ['30%', '50%', '70%'];

  return (
    <BottomSheet
      ref={sheetRef}
      snapPoints={snapPoints}
      // onChange={handleSheetChange}
      enablePanDownToClose={true}
      onClose={() => setIsOpen(false)}
    >
      <BottomSheetView
        style={{
          backgroundColor: '#fff',

          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {/* <Text>Awesome 🔥</Text> */}

        <View style={{ position: 'absolute', top: 5, right: 7 }}>
          <TouchableOpacity onPress={() => setIsOpen(false)}>
            <Text>
              <AntDesign name='close' size={17} color='black' />
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ marginTop: 20 }}>
          <Text style={{ fontSize: 20 }}>Profile image</Text>
          <TouchableOpacity
            style={[styles2.loginButton, { backgroundColor: 'green' }]}
          >
            <Text style={{ color: '#fff', fontSize: 20, fontWeight: '700' }}>
              View Image
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles2.loginButton, { backgroundColor: 'tomato' }]}
          >
            <Text style={{ color: '#fff', fontSize: 20, fontWeight: '700' }}>
              Upload Image
            </Text>
          </TouchableOpacity>
        </View>
      </BottomSheetView>
    </BottomSheet>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  userInfoSection: {
    paddingHorizontal: 30,
    marginBottom: 25,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    fontWeight: '500',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  infoBoxWrapper: {
    borderBottomColor: '#dddddd',
    // borderBottomWidth: 1,
    // borderTopColor: '#dddddd',
    // borderTopWidth: 1,
    flexDirection: 'row',
    height: 50,
    padding: 10,
    margin: 15,
  },
  infoBox: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuWrapper: {
    marginTop: 10,
  },
  menuItem: {
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  menuItemText: {
    color: '#777777',
    marginLeft: 20,
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 26,
  },
});
