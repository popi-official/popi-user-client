import { PopUpDetailItem } from '@/types/DetailScreenType';
import React from 'react';
<<<<<<< HEAD
import { Dimensions } from 'react-native';
import { S } from './EntirePageItem.style';
=======
import { Image, Text, View, Dimensions } from 'react-native';
>>>>>>> 4cc5d34 ([LCR-202] feat: 팝업 전체 상품 조회 페이지 구현)

type Props = {
  item: PopUpDetailItem;
};

const screenWidth = Dimensions.get('window').width;

const EntirePageItem = ({ item }: Props) => {
  const PADDING = 12;
  const GAP = 12;
  const itemWidth = (screenWidth - 2 * PADDING - GAP) / 2;
  if (!item) {
    return null;
  }

  return (
    <S.Container itemWidth={itemWidth}>
      <S.ItemImage source={{ uri: item.imagePath }} itemWidth={itemWidth} resizeMode="cover" />
      <S.TitleText numberOfLines={2} ellipsizeMode="tail">
        {item.title}
      </S.TitleText>
      <S.PriceText>{item.price}</S.PriceText>
    </S.Container>
  );
};

export default React.memo(EntirePageItem);
