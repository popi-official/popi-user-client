import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

type AuthState = {
  accessToken: string | null;
  isLogin: boolean;
  oauth: 'KAKAO' | 'GOOGLE' | null;
  registorToken?: string | null;
  setLogin: ({ token, oauth }: { token: string; oauth: 'KAKAO' | 'GOOGLE' }) => void;
  setRegistorToken: ({ token, oauth }: { token: string; oauth: 'KAKAO' | 'GOOGLE' }) => void;
  setLogout: () => void;
};

export const useAuthStore = create<AuthState>()(
  persist(
    set => ({
      accessToken: null,
      isLogin: false,
      oauth: null,
      registorToken: null,
      setLogin: ({ token, oauth }) =>
        set(prev => ({
          ...prev,
          accessToken: token,
          isLogin: true,
          oauth: oauth,
        })),
      setRegistorToken: ({ token, oauth }) =>
        set(prev => ({ ...prev, registorToken: token, oauth })),
      setLogout: () =>
        set({
          accessToken: null,
          isLogin: false,
          registorToken: null,
          oauth: null,
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
