import { useRouter } from 'expo-router';
import { Button, Text, View } from 'react-native';

export default function MyScreen() {
  const router = useRouter();
  return (
    <View style={{ backgroundColor: 'black', flex: 1 }}>
      <Text>마이페이지 화면</Text>
      <Button title="팝업 상세 페이지 이동" onPress={() => router.push('/(common)/popUpDetail')} />
    </View>
  );
}
