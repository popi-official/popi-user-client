import { getPopUDetailAllItems } from '@/apis/popUpDetail/PopUpDetailApi';
import { useInfiniteQuery } from '@tanstack/react-query';

export const usePopUpDetailAllItemsApi = ({ popupId }: { popupId: number }) => {
  const query = useInfiniteQuery({
    queryFn: ({ pageParam }) =>
      getPopUDetailAllItems({
        popupId,
        lastItemId: pageParam,
      }),
    queryKey: ['details', popupId],
    getNextPageParam: response => {
      const lastPage = response.data;

      if (lastPage.isLast) {
        return undefined;
      }

      const lastItem = lastPage.content[lastPage.content.length - 1];
      return lastItem.itemId;
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
