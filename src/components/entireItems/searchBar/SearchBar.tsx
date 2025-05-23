import { S } from './SearchBar.style';

const images = {
  searchIcon: require('@/assets/images/popupDetailItems/search-icon.webp'),
};

export default function SearchBar() {
  return (
    <S.SearchBarContainer>
      <S.PlaceholderText>찾으시는 굿즈가 있나요?</S.PlaceholderText>
      <S.SearchIcon source={images.searchIcon} resizeMode="contain" />
    </S.SearchBarContainer>
  );
}
