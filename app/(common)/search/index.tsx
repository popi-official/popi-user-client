import SearchResultPopUpItem from '@/components/searchScreen/searchResultPopUp/SearchResultPopUpItem';
import useSearch from '@/hooks/useSearch';
import { ActivityIndicator, FlatList, Text, View } from 'react-native';
import { PostPopUpSearch } from '@/types/SearchScreenType';

export default function SearchScreen() {
  const { searchResult, isLoading, hasMore, loadMore } = useSearch();

  const renderItem = ({ item }: { item: PostPopUpSearch }) => <SearchResultPopUpItem {...item} />;

  const renderHeader = () => (
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

  const renderFooter = () => {
    if (!isLoading) return null;
    return (
      <View style={{ padding: 20, alignItems: 'center' }}>
        <ActivityIndicator size="large" color="white" />
        <Text style={{ color: 'white', marginTop: 8 }}>로딩 중...</Text>
      </View>
    );
  };

  const handleEndReached = () => {
    if (hasMore && !isLoading) {
      console.log('🔄 다음 페이지 로딩...');
      loadMore();
    }
  };

  return (
    <View style={{ flex: 1, paddingHorizontal: 12, backgroundColor: 'black' }}>
      <FlatList
        data={searchResult as PostPopUpSearch[]}
        renderItem={renderItem}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: 'space-between' }}
        ListHeaderComponent={renderHeader}
        ListFooterComponent={renderFooter}
        onEndReached={handleEndReached}
        onEndReachedThreshold={0.3}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }}
        keyExtractor={(item, index) => `${item.popupId}-${index}`}
        ItemSeparatorComponent={() => <View style={{ height: 12 }} />} // 세로 간격
      />
    </View>
  );
}
