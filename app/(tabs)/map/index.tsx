import { useRouter } from 'expo-router';
import { Button, Text, View } from 'react-native';

export default function MapScreen() {
  const router = useRouter();
  return (
    <View>
      <Text>지도 화면</Text>
      <Button title="질문지 이동" onPress={() => router.push('/(common)/survey')} />
    </View>
  );
}
