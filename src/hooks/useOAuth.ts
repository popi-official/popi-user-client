import { useAuthStore } from '@/store/useAuthStore';
import { login as KakaoLogin, logout as KaKaoLogout } from '@react-native-seoul/kakao-login';
import { useOAuthApi } from './api/useOAuthApi';
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';
import { useEffect } from 'react';
import { Platform } from 'react-native';

export const useOAuth = () => {
  const { setLogin } = useAuthStore();
  const { kakaoOAuthMutation, googleOAuthMutation } = useOAuthApi();

  useEffect(() => {
    GoogleSignin.configure({
      webClientId: '402112703645-0d8heopncohebbrqtoapov7ngkr3d4nr.apps.googleusercontent.com',
    });
  }, []);

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

  const handleGoogleLogin = async () => {
    try {
      if (Platform.OS === 'android') {
        await GoogleSignin.hasPlayServices();
      }
      const userInfo = await GoogleSignin.signIn();
      console.log('구글 로그인 성공:', userInfo);

      // // 서버에 ID 토큰 전송
      // if (userInfo.idToken) {
      //   const response = await googleOAuthMutation.mutateAsync({ idToken: userInfo.idToken }); // 객체 형태로 변경
      //   console.log('구글 인증 서버 응답:', response);
      //   setLogin(response.data.accessToken);
      // } else {
      //   throw new Error('ID 토큰을 받지 못했습니다.');
      // }
    } catch (error) {
      console.log(error);
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

  const handleGoogleLogout = async () => {
    try {
      await GoogleSignin.signOut();
      console.log('구글 로그아웃 성공');
    } catch (error) {
      console.error('구글 로그아웃 오류:', error);
      throw error;
    }
  };

  return {
    handleKakaoLogin,
    handleKaKaoLogout,
    handleGoogleLogin,
    handleGoogleLogout,
  };
};
