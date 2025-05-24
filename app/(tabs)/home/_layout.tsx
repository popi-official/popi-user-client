import HomeHeaderRight from '@/components/header/homeHeaderRight/HomeHeaderRight';
import { DEFAULT_STACK_OPTIONS } from '@/constants/Options';
import { NativeStackNavigationOptions } from '@react-navigation/native-stack';
import { Stack } from 'expo-router';
import { Image } from 'react-native';

const images = {
  icon: require('@/assets/images/adaptive-icon.png'),
};

const HOME_OPTIONS: NativeStackNavigationOptions = {
  ...DEFAULT_STACK_OPTIONS,
  headerLeft: () => (
    <Image source={images.icon} style={{ width: 100, height: 40 }} resizeMode="contain" />
  ),
  headerRight: () => <HomeHeaderRight />,
};

export default function HomeLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={HOME_OPTIONS} />
    </Stack>
  );
}
