import { useRouter } from 'expo-router';
import { S } from './HeaderBackBtn.style';

const images = {
  backButtonIcon: require('@/assets/images/common/right-arrow.webp'),
};

export default function HeaderBackBtn() {
  const router = useRouter();

  return (
    <S.BackButtonContainer onPress={() => router.back()}>
      <S.BackButtonIcon source={images.backButtonIcon} />
    </S.BackButtonContainer>
  );
}
