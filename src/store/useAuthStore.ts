import { GetProfileResponse } from '@/types/api/ApiResponseType';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

type AuthState = {
  accessToken: string | null;
  isLogin: boolean;
  oauth: 'KAKAO' | 'GOOGLE' | null;
  registorToken?: string | null;
  profile: GetProfileResponse;
  setLogin: ({ token, oauth }: { token: string; oauth: 'KAKAO' | 'GOOGLE' }) => void;
  setRegistorToken: ({ token, oauth }: { token: string; oauth: 'KAKAO' | 'GOOGLE' }) => void;
  setLogout: () => void;
  setProfile: (profile: GetProfileResponse) => void;
};

export const useAuthStore = create<AuthState>()(
  persist(
    set => ({
      accessToken: null,
      isLogin: false,
      oauth: null,
      profile: {
        memberId: null,
        nickname: null,
        age: null,
        gender: null,
        status: null,
        role: null,
      },
      registorToken: null,
      setLogin: ({ token, oauth }) =>
        set(prev => ({
          ...prev,
          accessToken: token,
          isLogin: true,
          oauth: oauth,
        })),
      setProfile: (profile: GetProfileResponse) => {
        set(prev => ({
          ...prev,
          profile,
        }));
      },
      setRegistorToken: ({ token, oauth }) =>
        set(prev => ({ ...prev, registorToken: token, oauth })),
      setLogout: () =>
        set({
          accessToken: null,
          isLogin: false,
          registorToken: null,
          oauth: null,
          profile: undefined,
        }),
    }),
    {
      name: 'auth-storage',
      storage: createJSONStorage(() => localStorage),
      partialize: state => ({
        accessToken: state.accessToken,
        isLogin: state.isLogin,
      }),
      onRehydrateStorage: state => {
        if (!state.accessToken) {
          state.isLogin = false;
        }
      },
    },
  ),
);
