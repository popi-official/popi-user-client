import { postSearchPopUp, postSearchPopUpItem } from '@/apis/search/SearchApi';
import { useInfiniteQuery } from '@tanstack/react-query';

export const usePopUpSearch = (keyword: string, enabled: boolean) => {
  return useInfiniteQuery({
    queryFn: ({ pageParam }) =>
      postSearchPopUp({
        keyword,
        lastPopUpId: pageParam,
      }),
    queryKey: ['popupSearch', keyword],
    getNextPageParam: response => {
      const lastPage = response.data;

      if (lastPage.isLast) {
        return undefined;
      }

      const lastItem = lastPage.content[lastPage.content.length - 1];
      return lastItem.popupId;
    },
    initialPageParam: undefined as number | undefined,
    enabled: enabled && !!keyword.trim(),
  });
};

export const useItemSearch = (keyword: string, selectedPopUpId: number, enabled: boolean) => {
  return useInfiniteQuery({
    queryKey: ['itemSearch', keyword],
    queryFn: ({ pageParam }) =>
      postSearchPopUpItem({ keyword, selectedPopUpId, lastItemId: pageParam }),
    getNextPageParam: response => {
      const lastPage = response.data;

      if (lastPage.isLast) {
        return undefined;
      }

      const lastItem = lastPage.content[lastPage.content.length - 1];
      return lastItem.itemId;
    },
    initialPageParam: undefined as number | undefined,
    enabled: enabled && !!keyword.trim(),
  });
};
