import { useRouter } from 'expo-router';
import { Image } from 'react-native';
import HeaderRightWrapper from '../../headerRightWrapper/HeaderRightWrapper';
import CustomPressableBtn from '@/components/CustomPressableBtn';

const images = {
  qrIcon: require('@/assets/images/cart/qr-icon.webp'),
};

export default function CartRightBtn() {
  const router = useRouter();
  return (
    <HeaderRightWrapper>
      <CustomPressableBtn onPress={() => router.push('/(common)/qrCamera')}>
        <Image source={images.qrIcon} style={{ width: 24, height: 24 }} />
      </CustomPressableBtn>
    </HeaderRightWrapper>
  );
}
