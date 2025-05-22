import { useAuthStore } from '@/store/useAuthStore';
import { login as KakaoLogin, logout as KaKaoLogout } from '@react-native-seoul/kakao-login';
import { useOAuthApi } from './api/useOAuthApi';
import { useRouter } from 'expo-router';
import { PostSignUpRequest } from '@/types/api/ApiRequestType';

export const useOAuth = () => {
  const router = useRouter();
  const { kakaoOAuthMutation, signUpMutation } = useOAuthApi();

  const handleKakaoLogin = async () => {
    try {
      const tokenResponse = await KakaoLogin();
      const response = await kakaoOAuthMutation.mutateAsync(tokenResponse.idToken);

      if (response.data.isRegistered) {
        router.replace('/home');
      } else {
        useAuthStore.getState().setRegistorToken(response.data.registerToken);
        router.replace('/(common)/signUp');
      }
    } catch (error) {
      console.error('카카오 로그인 오류:', error);
      throw error;
    }
  };

  const handleSignUp = async ({ nickname, age, gender }: PostSignUpRequest) => {
    try {
      const registerToken = useAuthStore.getState().registorToken;
      if (!registerToken) {
        return false;
      }
      const response = await signUpMutation.mutateAsync({ nickname, age, gender, registerToken });
      if (response.data.isRegistered) {
        useAuthStore.getState().setLogin(response.data.accessToken);
        return true;
      }
      return false;
    } catch (error) {
      console.error(error);
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
    handleSignUp,
  };
};
