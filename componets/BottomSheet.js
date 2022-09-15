import React, { useCallback, useRef, useMemo, useState } from 'react';
import { StyleSheet, View, Text, Button, Platform } from 'react-native';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';

const BottomSheet = () => {
  // hooks
  const sheetRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  // variables
  const snapPoints = ['40%'];

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
  return (
    <View style={styles.container}>
      <Button title='Open' onPress={() => handleSnapPress(0)} />

      <Button title='Close' onPress={() => handleClosePress()} />
      {isOpen && (
        <BottomSheet
          ref={sheetRef}
          snapPoints={snapPoints}
          // onChange={handleSheetChange}
          enablePanDownToClose={true}
          onClose={() => setIsOpen(false)}
        >
          <BottomSheetView style={{ backgroundColor: '#ccc', flex: 1 }}>
            <Text>Awesome 🔥</Text>
            {Platform.OS === 'android' && (
              <Button onPress={() => handleClosePress()} title='close' />
            )}
          </BottomSheetView>
        </BottomSheet>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 100,
  },
});

export default BottomSheet;
