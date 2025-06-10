import { Image } from 'react-native';
import { S } from '../../../app/(common)/popUpDetail/PopUpDetail.style';

const Images = {
  chart: require('@/assets/images/common/chart.webp'),
};

export default function NoPopularItem() {
  return (
    <S.EmptyContainer>
      <Image source={Images.chart} resizeMode="contain" style={{ width: 100, tintColor: 'gray' }} />
      <S.EmptyTitle>아직 인기상품 데이터가 없어요</S.EmptyTitle>
      <S.EmptyContent>지금은 모든 상품이 똑같이 특별해요!</S.EmptyContent>
    </S.EmptyContainer>
  );
}
