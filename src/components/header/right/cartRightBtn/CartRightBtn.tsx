import { useRouter } from 'expo-router';
import { Image } from 'react-native';
import CustomPressableBtn from '@/components/CustomPressableBtn';

const images = {
  qrIcon: require('@/assets/images/cart/qr-icon.webp'),
};

export default function CartRightBtn() {
  const router = useRouter();
  return (
    <CustomPressableBtn
      onPress={() => router.push('/(common)/qrCamera')}
      hitSlop={13}
      style={{ marginLeft: 15 }}
    >
      <Image source={images.qrIcon} style={{ width: 24, height: 24 }} />
    </CustomPressableBtn>
  );
}
