import { ApiResponse, LoginResponse } from '@/types/api/ApiResponseType';
import { api } from '../config/Axios';
import { PostLoginRequest } from '@/types/api/ApiRequestType';

export const postLogin = async ({
  idToken,
  oauthProvider,
}: PostLoginRequest): ApiResponse<LoginResponse> => {
  const response = await api.post(`/auth/social-login?oauthProvider=${oauthProvider}`, {
    idToken: idToken,
  });
  return response.data;
};
