import { ApiResponse, GetReservationInfoResponse } from '@/types/api/ApiResponseType';
import { api } from '../config/Axios';
import { GetReservationInfoRequest } from '@/types/api/ApiRequestType';

export const getReservationInfo = async ({
  popupId,
  yyyyMM,
}: GetReservationInfoRequest): ApiResponse<GetReservationInfoResponse> => {
  // const response = await api.get(`/reservations/popups/${popupId}?date=${yyyyMM}`);
  const response = await api.get(`/reservations/popups/1?date=${yyyyMM}`);
  return response.data;
};
