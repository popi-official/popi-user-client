import { DEFAULT_STACK_OPTIONS } from '@/constants/Options';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { NativeStackNavigationOptions } from '@react-navigation/native-stack';
import BackBtn from '@/components/header/left/backBtn/BackBtn';
import SearchBarTextInput from '@/components/searchScreen/SearchBarTextInput';

const QR_ENTRY_OPTIONS: NativeStackNavigationOptions = {
  ...DEFAULT_STACK_OPTIONS,
  title: '',
  headerLeft: () => <BackBtn isNavigateHome={true} />,
};

const SEARCH_OPTIONS: NativeStackNavigationOptions = {
  ...DEFAULT_STACK_OPTIONS,
  headerLeft: () => <BackBtn />,
  headerTitle: () => <SearchBarTextInput flag={'POPUP'} />,
};

export default function CommonLayout() {
  return (
    <>
      <StatusBar style="light" />
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="onBoarding/index" />
        <Stack.Screen name="login/index" />
        <Stack.Screen name="search/index" options={SEARCH_OPTIONS} />
        <Stack.Screen name="qrCamera/index" />
        <Stack.Screen name="popUpEntry/index" options={QR_ENTRY_OPTIONS} />

        <Stack.Screen name="payment/index" />
        <Stack.Screen name="popUpDetail" />
        <Stack.Screen name="signUp" />
      </Stack>
    </>
  );
}
