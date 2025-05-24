import CartRightBtn from '@/components/header/cartRightBtn/CartRightBtn';
import { DEFAULT_STACK_OPTIONS } from '@/constants/Options';
import { NativeStackNavigationOptions } from '@react-navigation/native-stack';
import { Stack, useRouter } from 'expo-router';
import { Image, Text, TouchableOpacity, View } from 'react-native';

const images = {
  cartIcon: require('@/assets/images/cart/cart-icon.webp'),
  qrIcon: require('@/assets/images/cart/qr-icon.webp'),
};

const CART_HEADER_OPTIONS: NativeStackNavigationOptions = {
  ...DEFAULT_STACK_OPTIONS,
  headerTitleAlign: 'center',
  headerTitle: () => (
    <View style={{ flexDirection: 'row', gap: 4, alignItems: 'center', justifyContent: 'center' }}>
      <Image source={images.cartIcon} style={{ width: 20, height: 20 }} resizeMode="contain" />
      <Text
        style={{
          color: 'white',
          fontFamily: 'Pretendard-Semibold',
          fontSize: 20,
          textAlign: 'center',
        }}
      >
        장바구니
      </Text>
    </View>
  ),
  headerRight: () => <CartRightBtn />,
};

export default function CartLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={CART_HEADER_OPTIONS} />
    </Stack>
  );
}
