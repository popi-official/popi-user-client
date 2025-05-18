import { useRouter } from 'expo-router';
import { Button, Text, View } from 'react-native';

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View>
      <Text>홈 화면</Text>
      <Button title="팝업 리스트" onPress={() => router.push('/home/popup-list')} />
    </View>
  );
}
