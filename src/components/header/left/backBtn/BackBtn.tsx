import { useRouter } from 'expo-router';
import { S } from './BackBtn.style';
import CustomPressableBtn from '@/components/CustomPressableBtn';

const images = {
  backButtonIcon: require('@/assets/images/common/right-arrow.webp'),
};

type Props = {
  isNavigateHome?: boolean;
};

export default function BackBtn({ isNavigateHome = false }: Props) {
  const router = useRouter();

  return (
    <CustomPressableBtn
      onPress={isNavigateHome ? () => router.replace('/(tabs)/home') : () => router.back()}
    >
      <S.BackButtonIcon source={images.backButtonIcon} />
    </CustomPressableBtn>
  );
}
