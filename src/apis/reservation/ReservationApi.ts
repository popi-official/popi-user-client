import { ApiResponse, GetReservationInfoResponse, NoResponse } from '@/types/api/ApiResponseType';
import { api } from '../config/Axios';
import { GetReservationInfoRequest, PostReservationRequest } from '@/types/api/ApiRequestType';

export const getReservationInfo = async ({
  popupId,
  yyyyMM,
}: GetReservationInfoRequest): ApiResponse<GetReservationInfoResponse> => {
  const response = await api.get(`/reservations/popups/${popupId}?date=${yyyyMM}`);
  return response.data;
};

export const postReservation = async ({
  reservationId,
}: PostReservationRequest): ApiResponse<NoResponse> => {
  const response = await api.post(`/reservations/${reservationId}`, {});
  return response.data;
};
