import { api } from '../config/Axios';
import { DeleteReservationRequest } from '@/types/api/ApiRequestType';

export const deleteReservation = async ({ memberReservationId }: DeleteReservationRequest) => {
  const response = await api.delete(`/reservations/${memberReservationId}`, {});

  return response.data;
};
