import { postLogin, postSignUp } from '@/apis/auth/Auth';
import { PostSignUpRequest } from '@/types/api/ApiRequestType';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export const useOAuthApi = () => {
  const queryClient = useQueryClient();
  const kakaoOAuthMutation = useMutation({
    mutationFn: (idToken: string) => postLogin({ idToken, oauthProvider: 'KAKAO' }),
    onSuccess: () => queryClient.clear(),
  });

  const googleOAuthMutation = useMutation({
    mutationFn: (idToken: string) => postLogin({ idToken, oauthProvider: 'GOOGLE' }),
    onSuccess: () => queryClient.clear(),
  });

  const signUpMutation = useMutation({
    mutationFn: ({
      nickname,
      age,
      gender,
      registerToken,
    }: PostSignUpRequest & { registerToken: string }) =>
      postSignUp({ nickname, age, gender, registerToken }),
    onSuccess: () => queryClient.clear(),
  });

  return { kakaoOAuthMutation, googleOAuthMutation, signUpMutation };
};
