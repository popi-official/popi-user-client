import React from 'react';
import { Dimensions, Image } from 'react-native';
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
      <Image
        source={{ uri: item.imageUrl }}
        style={{ height: itemWidth, borderRadius: 8 }}
        resizeMode="cover"
      />
      <S.TitleText numberOfLines={2} ellipsizeMode="tail">
        {item.name}
      </S.TitleText>
      <S.PriceText>{item.price.toLocaleString()}원</S.PriceText>
    </S.Container>
  );
};

export default React.memo(EntirePageItem);
