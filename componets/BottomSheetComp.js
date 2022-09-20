import React, { useCallback, useRef, useContext } from 'react';
import { StyleSheet, View, Text, Button, Platform } from 'react-native';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import { BottomSheetContext } from '../context/BottomSheetContext';
import { AntDesign } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { getAuth, signOut } from 'firebase/auth';
import { app } from '../firebase/firebaseConfig';
import { UserContext } from '../App';

const BottomSheetComp = () => {
  // hooks
  const { isOpen, setIsOpen } = useContext(BottomSheetContext);
  // const { setUser } = useContext(UserContext);
  const sheetRef = useRef(null);
  const auth = getAuth(app);
  const { removeData, setFirstLogin, setUser } = useContext(UserContext);

  // variables
  const snapPoints = ['50%'];

  const logOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        console.log('Logout success');
      })
      .catch((error) => {
        // An error happened.
        console.log(error);
      });
  };

  // callbacks
  const handleSheetChange = useCallback((index) => {
    console.log('handleSheetChange', index);
  }, []);
  const handleSnapPress = useCallback((index) => {
    sheetRef.current?.snapToIndex(index);
    setIsOpen(true);
  }, []);
  const handleClosePress = useCallback(() => {
    sheetRef.current?.close();
  }, []);

  // render
  if (isOpen) {
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
          <View>
            <Text>Are you sure you want to signout</Text>
            <View style={{ flexDirection: 'row' }}>
              <Button title='Cancel' onPress={() => setIsOpen(false)} />
              <Button
                title='Ok'
                onPress={() => {
                  removeData();
                  setFirstLogin((prev) => !prev);
                  setIsOpen(false);
                  setUser(null);
                  logOut();
                }}
              />
            </View>
          </View>
        </BottomSheetView>
      </BottomSheet>
    );
  }
  return <></>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 100,
  },
});

export default BottomSheetComp;
