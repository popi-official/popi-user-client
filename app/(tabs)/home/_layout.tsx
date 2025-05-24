import HomeLeftBtn from '@/components/header/left/homeLeftBtn/HomeLeftBtn';
import HomeRightBtn from '@/components/header/right/homeRightBtn/HomeRightBtn';
import { DEFAULT_STACK_OPTIONS } from '@/constants/Options';
import { NativeStackNavigationOptions } from '@react-navigation/native-stack';
import { Stack } from 'expo-router';

const HOME_OPTIONS: NativeStackNavigationOptions = {
  ...DEFAULT_STACK_OPTIONS,
  headerLeft: () => <HomeLeftBtn />,
  headerRight: () => <HomeRightBtn />,
};

export default function HomeLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={HOME_OPTIONS} />
    </Stack>
  );
}
