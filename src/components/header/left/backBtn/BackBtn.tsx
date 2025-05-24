import { useRouter } from 'expo-router';
import { S } from './BackBtn.style';
import HeaderLeftWrapper from '../../headerLeftWrapper/HeaderLeftWrapper';

const images = {
  backButtonIcon: require('@/assets/images/common/right-arrow.webp'),
};

export default function BackBtn() {
  const router = useRouter();

  return (
    <HeaderLeftWrapper>
      <S.Container onPress={() => router.back()}>
        <S.BackButtonIcon source={images.backButtonIcon} />
      </S.Container>
    </HeaderLeftWrapper>
  );
}
