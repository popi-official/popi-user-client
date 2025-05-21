import { postLogin } from '@/apis/auth/Auth';
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

  return { kakaoOAuthMutation, googleOAuthMutation };
};
