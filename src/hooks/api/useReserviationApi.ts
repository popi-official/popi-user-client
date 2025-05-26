import { getReservationInfo } from '@/apis/reservation/ReservationApi';
import { GetReservationInfoRequest } from '@/types/api/ApiRequestType';
import { useQuery } from '@tanstack/react-query';

export const useGetReservationInfoApi = ({ popupId, yyyyMM }: GetReservationInfoRequest) => {
  const query = useQuery({
    queryKey: ['reservation', popupId, yyyyMM],
    queryFn: () => getReservationInfo({ popupId, yyyyMM }),
    enabled: !!popupId && !!yyyyMM,
  });

  return {
    reservationInfo: query.data?.data,
    isLoading: query.isLoading,
    isError: query.isError,
  };
};
