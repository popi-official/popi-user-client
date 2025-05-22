import { getProfile } from '@/apis/auth/Auth';
import { useAuthStore } from '@/store/useAuthStore';
import { useQuery } from '@tanstack/react-query';

export const useGetProfileApi = () => {
  const isLoggedIn = useAuthStore(state => !!state.accessToken);

  const query = useQuery({
    queryKey: ['Profile'],
    queryFn: getProfile,
    enabled: isLoggedIn,
  });

  return { data: query.data?.data, isLoading: query.isLoading, isError: query.isError };
};
