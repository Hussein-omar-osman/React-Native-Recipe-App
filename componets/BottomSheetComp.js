import React, { useCallback, useRef, useContext, useState } from 'react';
import { StyleSheet, View, Text, Button, Platform } from 'react-native';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import { BottomSheetContext } from '../context/BottomSheetContext';
import { AntDesign } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';

const BottomSheetComp = () => {
  // hooks
  const { isOpen, setIsOpen } = useContext(BottomSheetContext);
  const sheetRef = useRef(null);
  // const [isOpen, setIsOpen] = useState(false);

  // variables
  const snapPoints = ['50%'];

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
        <BottomSheetView style={{ backgroundColor: '#fff', flex: 1 }}>
          <Text>Awesome 🔥</Text>

          <View style={{ position: 'absolute', top: 5, right: 7 }}>
            <TouchableOpacity onPress={() => setIsOpen(false)}>
              <Text>
                <AntDesign name='close' size={17} color='black' />
              </Text>
            </TouchableOpacity>
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
