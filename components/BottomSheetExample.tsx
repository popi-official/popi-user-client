import React, { useCallback, useRef, useMemo } from 'react';
import { StyleSheet, Text, Button } from 'react-native';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import { S } from './TestScreen.style';

export default function BottomSheetExample() {
  const sheetRef = useRef<BottomSheet>(null);

  const snapPoints = useMemo(() => ['25%', '50%', '90%'], []);

  const handleSnapPress = useCallback((index: number) => {
    sheetRef.current?.snapToIndex(index);
  }, []);
  const handleClosePress = useCallback(() => {
    sheetRef.current?.close();
  }, []);

  return (
    <S.TestScreenContainer>
      <Button title="Snap To 90%" onPress={() => handleSnapPress(2)} />
      <Button title="Snap To 50%" onPress={() => handleSnapPress(1)} />
      <Button title="Snap To 25%" onPress={() => handleSnapPress(0)} />
      <Button title="Close" onPress={() => handleClosePress()} />
      <BottomSheet ref={sheetRef} snapPoints={snapPoints} enableDynamicSizing={false}>
        <BottomSheetView style={styles.contentContainer}>
          <Text>Awesome 🔥</Text>
        </BottomSheetView>
      </BottomSheet>
    </S.TestScreenContainer>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    padding: 36,
    alignItems: 'center',
  },
});
