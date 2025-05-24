import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

export default function CommonLayout() {
  return (
    <>
      <StatusBar style="light" />
      <Stack>
        <Stack.Screen name="onBoarding" options={{ headerShown: false }} />
        <Stack.Screen name="login" />
        <Stack.Screen name="popUpDetail" />
        <Stack.Screen name="signUp" />
        <Stack.Screen name="popUpEntry" />
        <Stack.Screen name="search" />
      </Stack>
    </>
  );
}
