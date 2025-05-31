import { getHotPopUps } from '@/apis/home/HomeApi';
import { useQuery } from '@tanstack/react-query';

export const useGetHotPopUpsApi = () => {
  const query = useQuery({
    queryFn: getHotPopUps,
    queryKey: ['khug', 'hoiu'],
  });

  return {
    hotItems: query.data?.data,
    isLoading: query.isLoading,
    isError: query.isError,
  };
};
