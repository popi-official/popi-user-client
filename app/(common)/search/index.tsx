import SearchResultPopUpItem from '@/components/searchScreen/searchResultPopUp/SearchResultPopUpItem';
import useSearch from '@/hooks/useSearch';
import { ActivityIndicator, FlatList, Text, View } from 'react-native';
import { PostPopUpSearch } from '@/types/SearchScreenType';
import NoItem from '@/components/searchScreen/noItem/NoItem';
import { useSearchStore } from '@/store/useSearchStore';
import { useCallback } from 'react';

export default function SearchScreen() {
  const { searchResult, isLoading, hasMore, loadMore } = useSearch();
  const { keyword } = useSearchStore();
  const searchMode = keyword.trim().length > 0 && true;

  const renderItem = useCallback(
    ({ item }: { item: PostPopUpSearch }) => <SearchResultPopUpItem {...item} />,
    [],
  );

  const renderHeader = useCallback(() => {
    if (searchResult.length > 0 && !isLoading) {
      return (
        <Text
          style={{
            color: 'white',
            fontSize: 18,
            fontWeight: 'bold',
            marginBottom: 16,
            marginTop: 12,
          }}
        >
          검색 결과
        </Text>
      );
    }
    return null;
  }, [isLoading, searchResult]);

  const renderFooter = useCallback(() => {
    if (!isLoading) return null;
    return (
      <View style={{ padding: 20, alignItems: 'center' }}>
        <ActivityIndicator size="large" color="white" />
      </View>
    );
  }, [isLoading]);

  const handleEndReached = useCallback(() => {
    if (hasMore && !isLoading) {
      loadMore();
    }
  }, [hasMore, isLoading, loadMore]);

  const keyExtractor = useCallback(
    (item: PostPopUpSearch, index: number) => `${item.popupId}-${index}`,
    [],
  );

  const itemSeparatorComponent = useCallback(() => <View style={{ height: 12 }} />, []);

  const listEmptyComponent = useCallback(() => {
    if (!isLoading && searchMode) {
      return <NoItem title="검색 결과와 일치하는 팝업이 없어요" />;
    }
    return null;
  }, [isLoading, searchMode]);

  const columnWrapperStyle = useCallback(
    () => ({
      justifyContent: 'space-between' as const,
    }),
    [],
  );

  const contentContainerStyle = useCallback(
    () => ({
      paddingBottom: 100,
    }),
    [],
  );

  return (
    <View style={{ flex: 1, paddingHorizontal: 12, backgroundColor: 'black' }}>
      <FlatList
        data={searchResult as PostPopUpSearch[]}
        renderItem={renderItem}
        numColumns={2}
        columnWrapperStyle={columnWrapperStyle()}
        ListHeaderComponent={renderHeader}
        ListFooterComponent={renderFooter}
        onEndReached={handleEndReached}
        ListEmptyComponent={listEmptyComponent}
        onEndReachedThreshold={0.3}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={contentContainerStyle()}
        keyExtractor={keyExtractor}
        ItemSeparatorComponent={itemSeparatorComponent}
      />
    </View>
  );
}
