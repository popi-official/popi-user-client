import { Image } from 'react-native';
import { S } from '../../../app/(common)/popUpDetail/PopUpDetail.style';

const Images = {
  chart: require('@/assets/images/survey/survey-gift.webp'),
};

export default function NoEntireItem() {
  return (
    <S.EmptyContainer>
      <Image source={Images.chart} resizeMode="contain" style={{ width: 200, height: 200 }} />
      <S.EmptyTitle>아직 등록된 상품이 없어요!</S.EmptyTitle>
    </S.EmptyContainer>
  );
}
