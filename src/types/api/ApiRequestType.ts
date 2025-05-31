import { SurveyItem } from '@/types/SurveyQuestions';
import { PaymentItemType } from '../PaymentType';
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

export type PostReservationRequest = {
  reservationId: number;
};

export type GetSearchPopUpRequest = {
  keyword: string;
  lastPopUpId: number | undefined;
};

export type GetSearchItemReqeust = {
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

export type GetPopUpDetailAllItemsRequest = {
  popupId: number;
  lastItemId: number | undefined;
};

export type GetPopUpDetailRequest = {
  popupId: number;
};

export type GetPopUpAllItemsRequest = {
  lastPopupId: number | undefined;
};

export type PostPaymentReadyRequest = {
  popupId: number;
  items: PaymentItemType[];
};

export type PostPaymentVerifyRequest = {
  impUid: string;
};

export type DeleteReservationRequest = {
  memberReservationId: string;
};

export type GetHotItemsRequest = {
  popupId: number;
};

export type GetDefaultItemsRequest = {
  popupId: number;
};

export type PostSurveyAnswersRequest = SurveyItem[];
