import { ItemUrlType } from '@/types/DetailScreen';
import { S } from '../../../../app/(common)/popUpDetail/PopUpDetail.style';
import React from 'react';

type Props = {
  item: ItemUrlType;
  index: number;
};

const HotItems = ({ item, index }: Props) => {
  return (
    <S.HotCardContainer isFirst={index === 0}>
      <S.HotItemImage source={{ uri: item.imageUrl }} />
      <S.Overlay />
      <S.HotItemTitle numberOfLines={1}>{item.name}</S.HotItemTitle>
      <S.HotItemPrice>{item.price.toLocaleString()}원</S.HotItemPrice>
    </S.HotCardContainer>
  );
};

export default React.memo(HotItems);
