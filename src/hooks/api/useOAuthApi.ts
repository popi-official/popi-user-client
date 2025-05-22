import { deleteProfile, postLogin, postLogout, postReissue, postSignUp } from '@/apis/auth/Auth';
import { useAuthStore } from '@/store/useAuthStore';
import { PostSignUpRequest } from '@/types/api/ApiRequestType';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export const useOAuthApi = () => {
  const queryClient = useQueryClient();
  const { setLogout } = useAuthStore();

  const kakaoOAuthMutation = useMutation({
    mutationFn: (idToken: string) => postLogin({ idToken, oauthProvider: 'KAKAO' }),
    onSuccess: response => {
      if (response.data.isRegistered) {
        useAuthStore.getState().setLogin({ token: response.data.accessToken, oauth: 'KAKAO' });
        queryClient.invalidateQueries({ queryKey: ['Profile'] });
      } else {
        useAuthStore
          .getState()
          .setRegistorToken({ token: response.data.registerToken, oauth: 'KAKAO' });
      }
    },
  });

  const googleOAuthMutation = useMutation({
    mutationFn: (idToken: string) => postLogin({ idToken, oauthProvider: 'GOOGLE' }),
    onSuccess: response => {
      if (response.data.isRegistered) {
        useAuthStore.getState().setLogin({ token: response.data.accessToken, oauth: 'GOOGLE' });
        queryClient.invalidateQueries({ queryKey: ['Profile'] });
      } else {
        useAuthStore
          .getState()
          .setRegistorToken({ token: response.data.registerToken, oauth: 'GOOGLE' });
      }
    },
  });

  const signUpMutation = useMutation({
    mutationFn: ({
      nickname,
      age,
      gender,
      registerToken,
    }: PostSignUpRequest & { registerToken: string }) =>
      postSignUp({ nickname, age, gender, registerToken }),
    onSuccess: response => {
      const oauth = useAuthStore.getState().oauth;
      if (!oauth) throw new Error('OAuth 설정이 없으니 다시 회원가입을 진행해주세요');

      useAuthStore.getState().setLogin({ token: response.data.accessToken, oauth });
      queryClient.invalidateQueries({ queryKey: ['Profile'] });
    },
  });

  const reIssueAccessTokenMutation = useMutation({
    mutationFn: postReissue,
    onSuccess: response => {
      const oauth = useAuthStore.getState().oauth;
      if (!oauth) throw new Error('OAuth 설정이 없으니 다시 로그인을 시도해주세요');
      useAuthStore.getState().setLogin({ token: response.data.accessToken, oauth });
    },
  });

  const postLogoutMutation = useMutation({
    mutationFn: postLogout,
    onSuccess: () => {
      queryClient.clear();
      setLogout();
    },
  });

  const deleteProfileMutation = useMutation({
    mutationFn: deleteProfile,
    onSuccess: () => {
      queryClient.clear();
      setLogout();
    },
  });

  return {
    kakaoOAuthMutation,
    googleOAuthMutation,
    signUpMutation,
    reIssueAccessTokenMutation,
    postLogoutMutation,
    deleteProfileMutation,
  };
};
