import { getReservationInfo } from '@/apis/reservation/ReservationApi';
import { deleteReservation } from '@/apis/reservation/ReservationCancelApi';
import { DeleteReservationRequest, GetReservationInfoRequest } from '@/types/api/ApiRequestType';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

export const useGetReservationInfoApi = ({ popupId, yyyyMM }: GetReservationInfoRequest) => {
  const query = useQuery({
    queryKey: ['reservation', popupId, yyyyMM],
    queryFn: () => getReservationInfo({ popupId, yyyyMM }),
  });

  return {
    reservationInfo: query.data?.data,
    isLoading: query.isLoading,
    isError: query.isError,
  };
};

export const useDeleteReservation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ['deleteReservation'],
    mutationFn: ({ memberReservationId }: DeleteReservationRequest) =>
      deleteReservation({ memberReservationId }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['myReservation'] });
    },
  });
};
