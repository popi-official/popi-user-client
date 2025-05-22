import { DEFAULT_STACK_OPTIONS } from '@/constants/Options';
import { Stack } from 'expo-router';

export default function CommonLayout() {
  return (
    <Stack screenOptions={DEFAULT_STACK_OPTIONS}>
      <Stack.Screen name="onBoarding" />
      <Stack.Screen name="login" />
      <Stack.Screen name="popUpDetail" />
      <Stack.Screen name="signUp" />
    </Stack>
  );
}
