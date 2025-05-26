import React from 'react';
import { Dimensions } from 'react-native';
import { S } from './EntirePageItem.style';
import { PADDING } from '@/constants/Options';

import { ItemUrlType } from '@/types/DetailScreen';

type Props = {
  item: ItemUrlType;
};

const screenWidth = Dimensions.get('window').width;

const EntirePageItem = ({ item }: Props) => {
  const GAP = 12;
  const itemWidth = (screenWidth - 2 * PADDING - GAP) / 2;
  if (!item) {
    return null;
  }

  return (
    <S.Container itemWidth={itemWidth}>
      <S.ItemImage source={{ uri: item.imageUrl }} itemWidth={itemWidth} resizeMode="cover" />
      <S.TitleText numberOfLines={2} ellipsizeMode="tail">
        {item.name}
      </S.TitleText>
      <S.PriceText>{item.price.toLocaleString()}원</S.PriceText>
    </S.Container>
  );
};

export default React.memo(EntirePageItem);
