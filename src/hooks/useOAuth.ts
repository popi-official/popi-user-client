import { useAuthStore } from '@/store/useAuthStore';
import { login as KakaoLogin, logout as KaKaoLogout } from '@react-native-seoul/kakao-login';
import { useOAuthApi } from './api/useOAuthApi';
import * as WebBrowser from 'expo-web-browser';

WebBrowser.maybeCompleteAuthSession();

export const useOAuth = () => {
  const { setLogin } = useAuthStore();
  const { kakaoOAuthMutation } = useOAuthApi();

  const handleKakaoLogin = async () => {
    try {
      const tokenResponse = await KakaoLogin();
      const response = await kakaoOAuthMutation.mutateAsync(tokenResponse.idToken);
      setLogin(response.data.accessToken);
    } catch (error) {
      console.error('카카오 로그인 오류:', error);
      throw error;
    }
  };

  const handleKaKaoLogout = async () => {
    try {
      await KaKaoLogout();
    } catch (error) {
      console.error('카카오 로그아웃 오류:', error);
      throw error;
    }
  };

  return {
    handleKakaoLogin,
    handleKaKaoLogout,
  };
};
