import { S } from './NoItem.style';

type Props = {
  title: string;
};

const images = {
  noItemIcon: require('@/assets/images/search/no-item-icon.webp'),
};

export default function NoItem({ title }: Props) {
  return (
    <S.NoItemContainer>
      <S.NoItemTitle>{title}</S.NoItemTitle>
      <S.NoItemImage source={images.noItemIcon} resizeMode="contain" />
    </S.NoItemContainer>
  );
}
