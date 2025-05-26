import { ParseStringToJson } from '@/utils/JsonParser';
import { useLocalSearchParams } from 'expo-router';
import { FlatList, ScrollView, View, ActivityIndicator } from 'react-native';
import HotItems from '@/components/entireItems/hotItems/HotItems';
import EntirePageItem from '@/components/entireItems/items/EntirePageItem';
import { S } from './EntireItems.style';
import SearchBarTextInput from '@/components/searchScreen/SearchBarTextInput';
import { useSearchStore } from '@/store/useSearchStore';
import useSearch from '@/hooks/useSearch';
import { PostItemSearch } from '@/types/SearchScreenType';
import { EntireItemMocks } from '@/mocks/PopUpDetailItemMocks';
import { ItemPathType, ItemUrlType } from '@/types/DetailScreen';
import NoItem from '@/components/searchScreen/noItem/NoItem';
import { useCallback } from 'react';

export default function EntireItemsScreen() {
  const { hotItems } = useLocalSearchParams<{ hotItems: string }>();
  const formattedPopularItems = ParseStringToJson(hotItems) as ItemPathType[];
  const { searchResult, isLoading, hasMore, loadMore } = useSearch();
  const { keyword } = useSearchStore();

  const isSearchMode = keyword.trim().length > 0;

  const renderSearchBar = useCallback(
    () => <SearchBarTextInput flag="ITEM" placeholder="찾으시는 굿즈가 있나요?" />,
    [],
  );

  const handleLoadMore = useCallback(() => {
    if (hasMore && !isLoading) {
      loadMore();
    }
  }, [hasMore, isLoading, loadMore]);

  const renderFooter = useCallback(() => {
    if (!isLoading || !hasMore) return null;
    return (
      <View style={{ padding: 20, alignItems: 'center' }}>
        <ActivityIndicator size="small" color="white" />
      </View>
    );
  }, [isLoading, hasMore]);

  const renderEmptyComponent = useCallback(() => {
    if (isLoading) {
      return (
        <View style={{ padding: 50, alignItems: 'center' }}>
          <ActivityIndicator size="large" color="white" />
        </View>
      );
    }
    return <NoItem title="검색 결과와 일치하는 팝업이 없어요" />;
  }, [isLoading]);

  const itemSeperatorComponent = useCallback(() => <View style={{ height: 12 }} />, []);

  const renderSearchItem = useCallback(
    ({ item, index }: { item: PostItemSearch; index: number }) => (
      <EntirePageItem key={index} item={item} />
    ),
    [],
  );

  const renderDefaultItem = useCallback(
    ({ item, index }: { item: ItemUrlType; index: number }) => (
      <EntirePageItem key={index} item={item} />
    ),
    [],
  );

  const renderHotItem = useCallback(
    (item: ItemPathType, index: number) => <HotItems item={item} key={index} index={index} />,
    [],
  );

  const keyExtractor = useCallback(
    (item: PostItemSearch, index: number) => `${item.itemId}-${index}`,
    [],
  );

  const defaultKeyExtractor = useCallback(
    (item: ItemUrlType, index: number) => `default-${item.itemId || index}`,
    [],
  );

  const renderSearchHeader = useCallback(() => {
    if (searchResult.length > 0 && !isLoading) {
      return (
        <S.ListHeaderContainer>
          <S.ListHeaderLabel>검색 결과</S.ListHeaderLabel>
        </S.ListHeaderContainer>
      );
    }
    return null;
  }, [searchResult.length, isLoading]);

  const renderDefaultHeader = useCallback(
    () => (
      <S.ListHeaderContainer>
        <S.ItemCategory style={{ marginTop: 20, marginBottom: 20 }}>WHAT`S HOT</S.ItemCategory>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {formattedPopularItems.map((item, index) => renderHotItem(item, index))}
        </ScrollView>
        <S.ListHeaderLabel>전체 상품</S.ListHeaderLabel>
      </S.ListHeaderContainer>
    ),
    [formattedPopularItems, renderHotItem],
  );

  const renderSearchContent = useCallback(
    () => (
      <FlatList
        data={searchResult as PostItemSearch[]}
        renderItem={renderSearchItem}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: 'space-between', gap: 12 }}
        contentContainerStyle={{ paddingBottom: 100, paddingHorizontal: 12 }}
        showsVerticalScrollIndicator={false}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.3}
        ListFooterComponent={renderFooter}
        ListEmptyComponent={renderEmptyComponent}
        keyExtractor={keyExtractor}
        ItemSeparatorComponent={itemSeperatorComponent}
        ListHeaderComponent={renderSearchHeader}
      />
    ),
    [
      searchResult,
      renderSearchItem,
      handleLoadMore,
      renderFooter,
      renderEmptyComponent,
      keyExtractor,
      itemSeperatorComponent,
      renderSearchHeader,
    ],
  );

  const renderDefaultContent = useCallback(
    () => (
      <FlatList
        data={EntireItemMocks}
        style={{ flex: 1 }}
        renderItem={renderDefaultItem}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: 'space-between', gap: 10 }}
        contentContainerStyle={{ gap: 20, paddingHorizontal: 12 }}
        showsVerticalScrollIndicator={false}
        keyExtractor={defaultKeyExtractor}
        ListHeaderComponent={renderDefaultHeader}
      />
    ),
    [renderDefaultItem, defaultKeyExtractor, renderDefaultHeader],
  );

  return (
    <View style={{ backgroundColor: 'black', flex: 1 }}>
      <View style={{ height: 50, marginBottom: 12 }}>{renderSearchBar()}</View>
      <View style={{ flex: 1 }}>
        {isSearchMode ? renderSearchContent() : renderDefaultContent()}
      </View>
    </View>
  );
}
