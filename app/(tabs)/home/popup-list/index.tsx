import BottomSheetExample from '@/components/BottomSheetExample';
import SwiperExample from '@/components/Example';
import { Text, View, StyleSheet } from 'react-native';

export default function PopUpListScreen() {
  return (
    <View style={styles.container}>
      <Text>팝업 리스트 화면</Text>
      <View style={styles.swiperContainer}>
        <SwiperExample />
      </View>
      <BottomSheetExample />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  swiperContainer: {
    height: 300,
  },
});
