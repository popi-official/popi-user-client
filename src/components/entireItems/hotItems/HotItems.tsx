import { PopUpDetailItem } from '@/types/DetailScreenType';
import { S } from '../../../../app/(common)/popUpDetail/PopUpDetail.style';
import React from 'react';

type Props = {
  item: PopUpDetailItem;
  index: number;
};

const HotItems = ({ item, index }: Props) => {
  return (
    <S.HotCardContainer isFirst={index === 0}>
      <S.HotItemImage source={{ uri: item.imagePath }} />
      <S.Overlay />
      <S.HotItemTitle numberOfLines={1}>{item.title}</S.HotItemTitle>
      <S.HotItemPrice>{item.price}</S.HotItemPrice>
    </S.HotCardContainer>
  );
};

export default React.memo(HotItems);
