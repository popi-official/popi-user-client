import { useAuthStore } from '@/store/useAuthStore';
import {
  login as KakaoLogin,
  logout as KakaoLogout,
  unlink as KaKaoUnlink,
} from '@react-native-kakao/user';
import { useOAuthApi } from './api/useOAuthApi';
import { useRouter } from 'expo-router';
import { PostSignUpRequest } from '@/types/api/ApiRequestType';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { useFirebasePushNotification } from './useFCM';

export const useOAuth = () => {
  const router = useRouter();
  const { initializePush } = useFirebasePushNotification();
  const {
    kakaoOAuthMutation,
    googleOAuthMutation,
    signUpMutation,
    reIssueAccessTokenMutation,
    postLogoutMutation,
    deleteProfileMutation,
  } = useOAuthApi();

  const handleKakaoLogin = async () => {
    try {
      const tokenResponse = await KakaoLogin();
      if (!tokenResponse.idToken) {
        throw new Error('카카오 토큰이 발급되지 않았습니다.');
      }
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

  const handleGoogleLogin = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const tokenResponse = await GoogleSignin.signIn();
      const response = await googleOAuthMutation.mutateAsync(tokenResponse.data?.idToken || '');

      if (response.data.isRegistered) {
        router.replace('/home');
      } else {
        router.replace('/(common)/signUp');
      }
    } catch (error) {
      console.error('구글 로그인 오류 : ', error);
    }
  };

  const handleSignUp = async ({ nickname, age, gender }: PostSignUpRequest) => {
    try {
      const registerToken = useAuthStore.getState().registorToken;
      if (!registerToken) {
        return false;
      }

      await signUpMutation.mutateAsync({ nickname, age, gender, registerToken });
      await initializePush();

      return true;
    } catch (error) {
      console.error('회원가입 오류:', error);
      throw error;
    }
  };

  const handleReIssue = async () => {
    await reIssueAccessTokenMutation.mutateAsync();
  };

  const handleLogout = async () => {
    try {
      const oauth = useAuthStore.getState().oauth;
      if (oauth === 'KAKAO') {
        await KakaoLogout();
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
    handleGoogleLogin,
    handleLogout,
    handleSignUp,
    handleReIssue,
    handleDeleteProfile,
  };
};
