import { Image } from 'react-native';
import { S } from '../../../app/(common)/popUpDetail/PopUpDetail.style';

const Images = {
  chart: require('@/assets/images/common/chart.webp'),
};

export default function NoPopularItem() {
  return (
    <S.EmptyContainer>
      <Image
        source={Images.chart}
        resizeMode="cover"
        style={{ width: 20, aspectRatio: 1, tintColor: 'white' }}
      />
      <S.EmptyTitle>아직 인기상품 데이터가 없어요</S.EmptyTitle>
      <S.EmptyContent>지금은 모든 상품이 똑같이 특별해요!</S.EmptyContent>
    </S.EmptyContainer>
  );
}
