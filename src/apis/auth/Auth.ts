import {
  ApiResponse,
  GetProfileResponse,
  NoResponse,
  ReIssueTokenResponse,
  SignedLoginResponse,
  UnSignedLoginResponse,
} from '@/types/api/ApiResponseType';
import { api } from '../config/Axios';
import { PostLoginRequest, PostSignUpRequest } from '@/types/api/ApiRequestType';

export const postLogin = async ({
  idToken,
  oauthProvider,
}: PostLoginRequest): ApiResponse<SignedLoginResponse | UnSignedLoginResponse> => {
  const response = await api.post(`/auth/social-login?oauthProvider=${oauthProvider}`, {
    idToken: idToken,
  });
  return response.data;
};

export const postSignUp = async ({
  nickname,
  gender,
  age,
  registerToken,
}: PostSignUpRequest & { registerToken: string }): ApiResponse<SignedLoginResponse> => {
  const response = await api.post(
    '/auth/register',
    { nickname, gender, age },
    {
      headers: {
        'register-token': registerToken,
      },
    },
  );
  return response.data;
};

export const postReissue = async (): ApiResponse<ReIssueTokenResponse> => {
  const response = await api.post('/auth/reissue');
  return response.data;
};

export const postLogout = async (): ApiResponse<NoResponse> => {
  const response = await api.post('/auth/logout');
  return response.data;
};

export const deleteProfile = async (): ApiResponse<NoResponse> => {
  const response = await api.delete('/auth/withdrawal');
  return response.data;
};

export const getProfile = async (): ApiResponse<GetProfileResponse> => {
  const response = await api.get('/members/me');
  return response.data;
};
