import { useRouter } from 'expo-router';
import { S } from './SearchBar.style';

const images = {
  searchIcon: require('@/assets/images/popupDetailItems/search-icon.webp'),
};

type Props = {
  placeHolderText: string;
};

export default function SearchBar({ placeHolderText }: Props) {
  const router = useRouter();

  return (
    <S.SearchBarContainer onPress={() => router.push('/(common)/search')}>
      <S.PlaceholderText>{placeHolderText}</S.PlaceholderText>
      <S.SearchIcon source={images.searchIcon} resizeMode="contain" />
    </S.SearchBarContainer>
  );
}
