import { DEFAULT_STACK_OPTIONS } from '@/constants/Options';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

export default function CommonLayout() {
  return (
    <>
      <StatusBar style="light" />
      <Stack screenOptions={DEFAULT_STACK_OPTIONS}>
        <Stack.Screen name="onBoarding" />
        <Stack.Screen name="login" />
        <Stack.Screen name="popUpDetail" />
        <Stack.Screen name="signUp" />
        <Stack.Screen name="popUpEntry" />
      </Stack>
    </>
  );
}
