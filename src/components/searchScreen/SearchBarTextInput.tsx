import { SearchFlagType, useSearchStore } from '@/store/useSearchStore';
import { useEffect, useRef, useState } from 'react';
import { TextInput } from 'react-native';
import { S } from './SearchBarTextInput.style';

type Props = {
  flag: SearchFlagType;
  placeholder?: string;
};

const images = {
  searchIcon: require('@/assets/images/popupDetailItems/search-icon.webp'),
  closeIcon: require('@/assets/images/signUp/close.png'),
};

export default function SearchBarTextInput({ flag, placeholder = '검색어를 입력해주세요' }: Props) {
  const { keyword, updateField, clearSearch } = useSearchStore();
  const searchRef = useRef<TextInput>(null);
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    updateField({ flag });
  }, [updateField, flag]);

  useEffect(() => {
    return () => clearSearch();
  }, []);

  return (
    <S.SearchContainer style={{ borderColor: isFocused ? '#D9D9D9' : '#5C5C5C' }}>
      <S.SearchInput
        ref={searchRef}
        placeholder={placeholder}
        placeholderTextColor={'#999999'}
        value={keyword}
        onChangeText={(input: string) => updateField({ keyword: input })}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />

      {keyword ? (
        <S.CloseButton onPress={() => clearSearch()}>
          <S.CloseIcon source={images.closeIcon} resizeMode="cover" />
        </S.CloseButton>
      ) : null}

      <S.SearchButton>
        <S.SearchIcon source={images.searchIcon} />
      </S.SearchButton>
    </S.SearchContainer>
  );
}
