import { ItemPathType, ItemUrlType, ReservableDate } from '../DetailScreen';
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

export type GetPopUpSearchResponse = {
  content: PostPopUpSearch[];
  isLast: boolean;
};

export type GetItemSearchResponse = {
  content: ItemUrlType[];
  isLast: boolean;
};

export type GetSurveyQuestionsResponse = SurveyChoice[];

export type GetReservationInfoResponse = {
  popupOpenDate: string;
  popupCloseDate: string;
  reservableDate: ReservableDate[];
};

export type GetPopUpDetailAllItemsResponse = {
  content: ItemUrlType[];
  isLast: boolean;
};

export type popUpMarkerItemsResponse = popUpMarkerItem[];

export type GetPopUpMarkerItemsResponse = popUpMarkerItem[];

export type popUpMarkerItem = {
  popupName: string;
  imageUrl: number; // 추후 string으로 변경
  popupOpenDate: string;
  popupCloseDate: string;
  address: string;
  latitude: number;
  longitude: number;
};

export type GetHotPopUpItemsResponse = HotPopUpItem[];

export type HotPopUpItem = {
  popupId: number;
  popupName: string;
  imageUrl: number; // 추후 string으로 변경
  popupOpenDate: string;
  popupCloseDate: string;
  address: string;
};

export type GetPopUpItemsResponse = PopUpItem[];

export type PopUpItem = {
  popupId: number;
  popupName: string;
  imageUrl: number; // 추후 string으로 변경
  popupOpenDate: string;
  popupCloseDate: string;
  address: string;
};

export type GetReservationDetailResponse = {
  popupName: string;
  popupDate: string;
  popupDay: string;
  popupTime: string;
  address: string;
  qrCodeBase64: string;
};

export type GetRecommendedItemsResponse = RecommendedItem[];

export type RecommendedItem = {
  itemId: number;
  title: string;
  imagePath: number; // 추후 string으로 변경
  price: number;
};

export type GetPopularItemsResponse = PopularItem[];

export type PopularItem = {
  itemId: number;
  title: string;
  imagePath: number; // 추후 string으로 변경
  price: number;
};
