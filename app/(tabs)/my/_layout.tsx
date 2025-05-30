import MyTitle from '@/components/header/title/myTitle/MyTitle';
import { DEFAULT_STACK_OPTIONS } from '@/constants/Options';
import { NativeStackNavigationOptions } from '@react-navigation/native-stack';
import { Stack } from 'expo-router';

const MY_HEADER_OPTIONS: NativeStackNavigationOptions = {
  ...DEFAULT_STACK_OPTIONS,
  headerTitleAlign: 'center',
  headerTitle: () => <MyTitle />,
};

export default function MyLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={MY_HEADER_OPTIONS} />
    </Stack>
  );
}
