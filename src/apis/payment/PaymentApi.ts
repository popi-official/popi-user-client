import {
  ApiResponse,
  GlobalResponse,
  NoResponse,
  PostPaymentReadyErrorResponse,
  PostPaymentReadyResponse,
} from '@/types/api/ApiResponseType';
import { api } from '../config/Axios';
import { PostPaymentReadyRequest, PostPaymentVerifyRequest } from '@/types/api/ApiRequestType';

export const postPaymentReady = async (
  request: PostPaymentReadyRequest,
): ApiResponse<PostPaymentReadyResponse | PostPaymentReadyErrorResponse> => {
  try {
    const response = await api.post('/payments/ready', request);
    return response.data;
  } catch (error: any) {
    if (error?.response?.data) {
      return error.response.data;
    }
    throw error;
  }
};

export const postPaymentVerify = async ({
  impUid,
}: PostPaymentVerifyRequest): ApiResponse<NoResponse> => {
  const response = await api.post(`/payments/verify/${impUid}`);
  return response.data;
};
