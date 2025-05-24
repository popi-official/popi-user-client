import { DEFAULT_STACK_OPTIONS } from '@/constants/Options';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { NativeStackNavigationOptions } from '@react-navigation/native-stack';
import HeaderBackBtn from '@/components/header/headerBackBtn/HeaderBackBtn';

const QR_ENTRY_OPTIONS: NativeStackNavigationOptions = {
  ...DEFAULT_STACK_OPTIONS,
  title: '',
  headerLeft: () => <HeaderBackBtn />,
};

export default function CommonLayout() {
  return (
    <>
      <StatusBar style="light" />
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="onBoarding/index" />
        <Stack.Screen name="login/index" />
        <Stack.Screen name="popUpDetail" />
        <Stack.Screen name="signUp" />
        <Stack.Screen name="popUpEntry/index" options={QR_ENTRY_OPTIONS} />
        <Stack.Screen name="search" />
        <Stack.Screen name="qrCamera" />
      </Stack>
    </>
  );
}
