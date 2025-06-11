import { ApiResponse, NoResponse } from '@/types/api/ApiResponseType';
import { api } from '../config/Axios';

export const postNotificationApi = async ({
  fcmToken,
}: {
  fcmToken: string;
}): ApiResponse<NoResponse> => {
  const response = await api.post('/notifications/fcm/register', { fcmToken });
  return response.data;
};
