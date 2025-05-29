import { getHotItemRequest } from '@/apis/home/HomeApi';
import { useQuery } from '@tanstack/react-query';

export const useGetHotPopUpsApi = () => {
  const query = useQuery({
    queryFn: getHotItemRequest,
    queryKey: ['khug', 'hoiu'],
  });

  return {
    hotItems: query.data?.data,
    isLoading: query.isLoading,
    isError: query.isError,
  };
};
