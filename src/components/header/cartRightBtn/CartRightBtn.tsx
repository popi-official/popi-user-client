import { useRouter } from 'expo-router';
import { Image, TouchableOpacity } from 'react-native';

const images = {
  qrIcon: require('@/assets/images/cart/qr-icon.webp'),
};

export default function CartRightBtn() {
  const router = useRouter();
  return (
    <TouchableOpacity onPress={() => router.push('/(common)/qrCamera')}>
      <Image source={images.qrIcon} style={{ width: 24, height: 24 }} />
    </TouchableOpacity>
  );
}
