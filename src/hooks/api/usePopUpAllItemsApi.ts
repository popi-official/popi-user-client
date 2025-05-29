import { getPopUpAllItems } from '@/apis/home/HomeApi';
import { useInfiniteQuery } from '@tanstack/react-query';

export const usePopUpAllItemsApi = () => {
  const query = useInfiniteQuery({
    queryFn: ({ pageParam }) =>
      getPopUpAllItems({
        lastPopupId: pageParam,
      }),
    queryKey: ['popups'],
    getNextPageParam: response => {
      const lastPage = response.data;

      if (lastPage.isLast) {
        return undefined;
      }

      const lastItem = lastPage.content[lastPage.content.length - 1];
      return lastItem.popupId;
    },
    initialPageParam: undefined as number | undefined,
  });

  return {
    allItems: query.data?.pages.flatMap(data => data.data.content),
    isItemLoading: query.isLoading,
    isItemError: query.isError,
    allItemsQuery: query,
  };
};
