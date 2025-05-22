import { useAuthStore } from '@/store/useAuthStore';
import {
  login as KakaoLogin,
  logout as KaKaoLogout,
  unlink as KaKaoUnlink,
} from '@react-native-seoul/kakao-login';
import { useOAuthApi } from './api/useOAuthApi';
import { useRouter } from 'expo-router';
import { PostSignUpRequest } from '@/types/api/ApiRequestType';

export const useOAuth = () => {
  const router = useRouter();
  const {
    kakaoOAuthMutation,
    signUpMutation,
    reIssueAccessTokenMutation,
    postLogoutMutation,
    deleteProfileMutation,
  } = useOAuthApi();

  const handleKakaoLogin = async () => {
    try {
      const tokenResponse = await KakaoLogin();
      const response = await kakaoOAuthMutation.mutateAsync(tokenResponse.idToken);

      if (response.data.isRegistered) {
        router.replace('/home');
      } else {
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
      await signUpMutation.mutateAsync({ nickname, age, gender, registerToken });
    } catch (error) {
      console.error(error);
    }
  };

  const handleReIssue = async () => {
    await reIssueAccessTokenMutation.mutateAsync();
  };

  const handleLogout = async () => {
    try {
      const oauth = useAuthStore.getState().oauth;
      if (oauth === 'KAKAO') {
        await KaKaoLogout();
      }
      await postLogoutMutation.mutateAsync();
    } catch (error) {
      console.error('카카오 로그아웃 오류:', error);
      throw error;
    }
  };

  const handleDeleteProfile = async () => {
    try {
      await deleteProfileMutation.mutateAsync();
      await KaKaoUnlink();
    } catch (error) {
      console.error('계정 삭제 오류', error);
      throw error;
    }
  };

  return {
    handleKakaoLogin,
    handleLogout,
    handleSignUp,
    handleReIssue,
    handleDeleteProfile,
  };
};
