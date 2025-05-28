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

export type PostSearchPopUpRequest = {
  keyword: string;
  lastPopUpId: number | undefined;
};

export type PostSearchItemReqeust = {
  keyword: string;
  selectedPopUpId: number;
  lastItemId: number | undefined;
};

export type GetReservationInfoRequest = {
  popupId: number;
  yyyyMM: string; // 2025-05 형식
};

export type GetSurveyQuestionsRequest = {
  popupId: number;
};
