import { Image, Text, View } from 'react-native';

const images = {
  cartIcon: require('@/assets/images/cart/cart-icon.webp'),
  qrIcon: require('@/assets/images/cart/qr-icon.webp'),
};

export default function CartTitle() {
  return (
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
  );
}
