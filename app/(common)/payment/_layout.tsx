import { Stack } from 'expo-router';
import { NativeStackNavigationOptions } from '@react-navigation/native-stack';
import { DEFAULT_STACK_OPTIONS } from '@/constants/Options';
import BackBtn from '@/components/header/left/backBtn/BackBtn';
import { Text } from 'react-native';

const PAYMENT_OPTIONS: NativeStackNavigationOptions = {
  ...DEFAULT_STACK_OPTIONS,
  headerLeft: () => <BackBtn />,
  headerTitle: () => (
    <Text
      style={{
        color: 'white',
        textAlign: 'center',
        fontFamily: 'Pretendard-Regular',
        fontSize: 20,
      }}
    >
      결제
    </Text>
  ),
};

export default function PaymentLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" options={PAYMENT_OPTIONS} />
      <Stack.Screen name="paymentResult/index" />
    </Stack>
  );
}
