import { getMapPopUps } from '@/apis/map/MapApi';
import { useQuery } from '@tanstack/react-query';

export const useGetMapApi = (latMin: number, latMax: number, lngMin: number, lngMax: number) => {
  const query = useQuery({
    queryKey: ['maplist', latMin, latMax, lngMin, lngMax],
    queryFn: () => getMapPopUps(latMin, latMax, lngMin, lngMax),
    enabled: latMin !== undefined && lngMin !== undefined, // 처음엔 undefined 방지
    //staleTime: 1000 * 60 * 2, // 캐시 2분
  });

  return {
    popUpMarkers: query.data?.data ?? [],
    isLoading: query.isLoading,
    isError: query.isError,
    refetch: query.refetch,
  };
};
