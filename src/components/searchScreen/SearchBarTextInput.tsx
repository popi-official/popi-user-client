import { SearchFlagType, useSearchStore } from '@/store/useSearchStore';
import { useEffect, useRef, useState } from 'react';
import { Image, Pressable, TextInput, View } from 'react-native';

type Props = {
  flag: SearchFlagType;
};

const images = {
  searchIcon: require('@/assets/images/popupDetailItems/search-icon.webp'),
  closeIcon: require('@/assets/images/signUp/close.png'),
};

export default function SearchBarTextInput({ flag }: Props) {
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
    <View
      style={{
        backgroundColor: '#202020',
        borderRadius: 25,
        overflow: 'hidden',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 16,
        flex: 1,
        marginHorizontal: 12,
        borderWidth: 1,
        borderColor: isFocused ? '#D9D9D9' : '#5C5C5C',
      }}
    >
      <TextInput
        ref={searchRef}
        placeholder="검색어를 입력해주세요"
        placeholderTextColor={'#999999'}
        style={{
          color: 'white',
          flex: 1,
          fontSize: 18,
        }}
        value={keyword}
        onChangeText={input => updateField({ keyword: input })}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />

      {keyword ? (
        <Pressable onPress={() => clearSearch()} style={{ marginLeft: 8 }}>
          <Image source={images.closeIcon} style={{ width: 15, height: 15 }} resizeMode="cover" />
        </Pressable>
      ) : null}

      <Pressable style={{ marginLeft: 8 }}>
        <Image
          source={images.searchIcon}
          style={{
            width: 20,
            height: 20,
            tintColor: 'white',
          }}
        />
      </Pressable>
    </View>
  );
}
