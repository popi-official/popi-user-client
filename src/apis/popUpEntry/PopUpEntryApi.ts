import { ApiResponse, GetUpComingTicketResponse } from '@/types/api/ApiResponseType';
import { api } from '../config/Axios';

export const getUpComingTicketInfo = async (): ApiResponse<GetUpComingTicketResponse> => {
  const response = await api.get(`/reservations/upcoming`);
  return response.data;
};
