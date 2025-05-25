import { useSearchStore } from '@/store/useSearchStore';
import { usePopUpStore } from '@/store/usePopUpStore';
import { useDebounce } from './useDebounce';
import { useItemSearch, usePopUpSearch } from './api/useSearchApi';

export default function useSearch() {
  const { keyword, flag } = useSearchStore();
  const selectedPopupId = usePopUpStore(state => state.selectedPopUpId);
  const debouncedKeyword = useDebounce(keyword, 300);

  const popupQuery = usePopUpSearch(debouncedKeyword, flag === 'POPUP');
  const itemQuery = useItemSearch(debouncedKeyword, selectedPopupId, flag === 'ITEM');

  if (flag === 'POPUP') {
    return {
      searchResult: popupQuery.data?.pages.flatMap(page => page.data.content) || [],
      isLoading: popupQuery.isLoading,
      hasMore: popupQuery.hasNextPage,
      loadMore: popupQuery.fetchNextPage,
      error: popupQuery.error,
      refetch: popupQuery.refetch,
    };
  }

  return {
    searchResult: itemQuery.data?.pages.flatMap(page => page.data.content) || [],
    isLoading: itemQuery.isLoading,
    hasMore: itemQuery.hasNextPage,
    loadMore: itemQuery.fetchNextPage,
    error: itemQuery.error,
    refetch: itemQuery.refetch,
  };
}
