import { AgeOption, GenderOption } from '../SignUpScreenType';

export type PostLoginRequest = {
  idToken: string;
  oauthProvider: 'KAKAO' | 'GOOGLE';
};

export type PostSignUpRequest = {
  nickname: string;
  age: AgeOption;
  gender: GenderOption;
};
