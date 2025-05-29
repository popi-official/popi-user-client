import { deleteReservation } from '@/apis/reservation/ReservationCancelApi';
import {
  DeleteReservationRequest,
  GetReservationInfoRequest,
  PostReservationRequest,
} from '@/types/api/ApiRequestType';
import { getReservationInfo, postReservation } from '@/apis/reservation/ReservationApi';
import { PostReservationErrorResponse } from '@/types/api/ApiResponseType';
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

export const usePostReservationApi = ({
  onSuccess,
  onError,
}: {
  onSuccess: () => void;
  onError: (message: string) => void;
}) => {
  const queryClient = useQueryClient();

  const postReservationMutation = useMutation({
    mutationFn: (data: PostReservationRequest) => postReservation(data),

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['reservationInfo'] });
      onSuccess();
    },

    onError: error => {
      const resData = (error as any)?.response?.data?.data as PostReservationErrorResponse;
      const errorClass = resData?.errorClassName;

      let message = '예약에 실패했습니다. 다시 시도해주세요.';

      switch (errorClass) {
        case 'RESERVATION_ALREADY_EXISTS':
          message = '이미 예약되어 있어요';
          break;
        case 'RESERVATION_FAILED':
          message = '이미 완료된 예약입니다';
          break;
        case 'RedisConnectionFailureException':
          message = '서버 오류가 발생하였습니다';
          break;
      }

      onError(message);
    },
  });

  return { postReservationMutation };
};
