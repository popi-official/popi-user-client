import CartRightBtn from '@/components/header/right/cartRightBtn/CartRightBtn';
import CartTitle from '@/components/header/title/cartTitle/CartTitle';
import { DEFAULT_STACK_OPTIONS } from '@/constants/Options';
import { NativeStackNavigationOptions } from '@react-navigation/native-stack';
import { Stack } from 'expo-router';

const CART_HEADER_OPTIONS: NativeStackNavigationOptions = {
  ...DEFAULT_STACK_OPTIONS,
  headerTitleAlign: 'center',
  headerTitle: () => <CartTitle />,
  headerRight: () => <CartRightBtn />,
};

export default function CartLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={CART_HEADER_OPTIONS} />
    </Stack>
  );
}
