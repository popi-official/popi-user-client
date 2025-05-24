import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

export default function CommonLayout() {
  return (
    <>
      <StatusBar style="light" />
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="onBoarding/index" />
        <Stack.Screen name="login/index" />
        <Stack.Screen name="popUpDetail" />
        <Stack.Screen name="signUp" />
        <Stack.Screen name="popUpEntry" />
        <Stack.Screen name="search" />
      </Stack>
    </>
  );
}
