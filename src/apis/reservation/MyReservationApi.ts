import { ApiResponse, GetMyReservationResponse } from '@/types/api/ApiResponseType';
import { api } from '../config/Axios';

export const getMyReservation = async (): ApiResponse<GetMyReservationResponse> => {
  const response = await api.get('/reservations');
  return response.data;
};
