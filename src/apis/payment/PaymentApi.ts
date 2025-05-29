import { ApiResponse, NoResponse, PostPaymentReadyResponse } from '@/types/api/ApiResponseType';
import { api } from '../config/Axios';
import { PostPaymentReadyRequest, PostPaymentVerifyRequest } from '@/types/api/ApiRequestType';

export const postPaymentReady = async (
  request: PostPaymentReadyRequest,
): ApiResponse<PostPaymentReadyResponse> => {
  const response = await api.post('/payments/ready', request);
  return response.data;
};

export const postPaymentVerify = async ({
  impUid,
}: PostPaymentVerifyRequest): ApiResponse<NoResponse> => {
  const response = await api.post(`/payments/verify/${impUid}`);
  return response.data;
};
