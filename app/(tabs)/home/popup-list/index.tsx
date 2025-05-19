import BottomSheetExample from '@/components/BottomSheetExample';
import CustomBottomTab from '@/components/customBottomTab/CustomBottomTab';
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
      <CustomBottomTab />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // 전체 화면 차지
  },
  swiperContainer: {
    height: 300, // 명시적인 높이 지정
    // 또는 flex: 1을 사용해도 됩니다
  },
});
