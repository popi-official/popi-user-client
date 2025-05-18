import { useRouter } from 'expo-router';
import { Button } from 'react-native';
import { Text, View } from 'react-native';

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View>
      <Text>asdg</Text>
      <Button title="온보딩" onPress={() => router.push('/(common)/onBoarding')} />
    </View>
  );
}
