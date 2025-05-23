import { ItemPathType, ItemUrlType } from '../DetailScreen';
import { PostItemSearch, PostPopUpSearch } from '../SearchScreenType';
import { AgeOption, GenderOption } from '../SignUpScreenType';
import { SurveyChoice } from '../SurveyQuestions';

export type ApiResponse<T> = Promise<GlobalResponse<T>>;
export type ApiResult<T> = Promise<T>;

export type GlobalResponse<T> = {
  success: boolean;
  status: number;
  data: T;
  timestamp: string;
};

export type NoResponse = null;

export type SignedLoginResponse = {
  accessToken: string;
  isRegistered: true;
};

export type UnSignedLoginResponse = {
  registerToken: string;
  isRegistered: false;
};

export type ReIssueTokenResponse = {
  accessToken: string;
};

export type GetProfileResponse = {
  memberId: number | null;
  nickname: string | null;
  age: AgeOption | null;
  gender: GenderOption | null;
};

export type GetHotItemsResponse = ItemPathType[];

export type GetItemsResponse = {
  content: PostItemSearch;
  isLast: boolean;
};

export type GetPopUpDetailResponse = {
  popupId: number;
  popupName: string;
  imageUrl: string;
  popupOpenDate: string;
  popupCloseDate: string;
  reservationOpenDateTime: string;
  reservationCloseDateTime: string;
  address: string;
  runOpenTime: string;
  runCloseTime: string;
  latitude: number;
  longitude: number;
};

export type PostPopUpSearchResponse = {
  content: PostPopUpSearch[];
  isLast: boolean;
};

export type PostItemSearchResponse = {
  content: ItemUrlType[];
  isLast: boolean;
};
export type SurveyQuestionsResponse = SurveyChoice[];
