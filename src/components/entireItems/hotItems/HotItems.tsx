import { ItemPathType } from '@/types/DetailScreen';
import { S } from '../../../../app/(common)/popUpDetail/PopUpDetail.style';
import React from 'react';

type Props = {
  item: ItemPathType;
  index: number;
};

const HotItems = ({ item, index }: Props) => {
  return (
    <S.HotCardContainer isFirst={index === 0}>
      <S.HotItemImage source={{ uri: item.imagePath }} />
      <S.Overlay />
      <S.HotItemTitle numberOfLines={1}>{item.title}</S.HotItemTitle>
      <S.HotItemPrice>{item.price.toLocaleString()}원</S.HotItemPrice>
    </S.HotCardContainer>
  );
};

export default React.memo(HotItems);
