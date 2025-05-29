import { getPopUpDetailAllItems } from '@/apis/popUpDetail/PopUpDetailApi';
import { useInfiniteQuery } from '@tanstack/react-query';
import { getPopUpDetailInfo } from '@/apis/popUpDetail/PopUpDetailApi';
import { GetPopUpDetailRequest } from '@/types/api/ApiRequestType';
import { useQuery } from '@tanstack/react-query';

export const usePopUpDetailAllItemsApi = ({ popupId }: { popupId: number }) => {
  const query = useInfiniteQuery({
    queryFn: ({ pageParam }) =>
      getPopUpDetailAllItems({
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

export const usePopUpDetailApi = ({ popupId }: GetPopUpDetailRequest) => {
  const query = useQuery({
    queryFn: () => getPopUpDetailInfo({ popupId }),
    queryKey: ['popup', popupId],
  });

  return {
    popUpDetailInfo: query.data?.data,
    isLoading: query.isLoading,
    isError: query.isError,
  };
};
