import { useAuthStore } from '@/store/useAuthStore';
import axios, { AxiosError } from 'axios';
import { postReissue } from '../auth/Auth';

export const api = axios.create({
  baseURL: 'https://dev-api.popi.today',
  withCredentials: true,
});

api.interceptors.request.use(
  config => {
    const token = useAuthStore.getState().accessToken;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error: Error) => {
    return Promise.reject(error);
  },
);

api.interceptors.response.use(
  response => response,
  async (error: AxiosError) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest?.headers['X-Retry']) {
      try {
        const response = await postReissue();
        const oauth = useAuthStore.getState().oauth;
        if (!oauth) {
          throw new Error('OAuth 설정이 없으니 홈페이지에서 다시 로그인해주세요');
        }
        useAuthStore.getState().setLogin({ token: response.data.accessToken, oauth });

        originalRequest!.headers.Authorization = `Bearer ${useAuthStore.getState().accessToken}`;
        originalRequest!.headers['X-Retry'] = 'true';

        return axios(originalRequest!);
      } catch (refreshError) {
        useAuthStore.getState().setLogout();
        return Promise.reject(refreshError);
      }
    }
    return Promise.reject(error);
  },
);
