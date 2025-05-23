import { GetHotItemsResponse } from '@/types/api/ApiResponseType';
import { ParseStringToJson } from '@/utils/JsonParser';
import { useLocalSearchParams } from 'expo-router';
import { FlatList, ScrollView, View } from 'react-native';
import HotItems from '@/components/entireItems/hotItems/HotItems';
import { PopUpDetailItemsMock } from '@/mocks/PopUpDetailItemMocks';
import EntirePageItem from '@/components/entireItems/items/EntirePageItem';
import { S } from './EntireItems.style';
import SearchBar from '@/components/entireItems/searchBar/SearchBar';

export default function EntireItemsScreen() {
  const { hotItems } = useLocalSearchParams<{ hotItems: string }>();
  const formattedPopularItems = ParseStringToJson(hotItems) as GetHotItemsResponse;

  return (
    <View style={{ flex: 1, backgroundColor: 'black' }}>
      <FlatList
        data={PopUpDetailItemsMock}
        renderItem={({ item, index }) => <EntirePageItem key={index} item={item} />}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: 'space-between', gap: 10 }}
        contentContainerStyle={{ gap: 20, paddingHorizontal: 12 }}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <S.ListHeaderContainer>
            <SearchBar placeHolderText="찾으시는 굿즈가 있나요?" />
            <S.ItemCategory style={{ marginTop: 40, marginBottom: 20 }}>WHAT’S HOT</S.ItemCategory>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {formattedPopularItems.map((item, index) => {
                return <HotItems item={item} key={index} index={index} />;
              })}
            </ScrollView>
            <S.ListHeaderLabel>전체 상품</S.ListHeaderLabel>
          </S.ListHeaderContainer>
        }
      />
    </View>
  );
}
