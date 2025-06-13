import { popUpMarkerItem } from '@/types/MapScreenType';
import { ItemUrlType, ReservableDate } from '../DetailScreen';
import { PostItemSearch, PostPopUpSearch } from '../SearchScreenType';
import { AgeOption, GenderOption } from '../SignUpScreenType';
import { SurveyChoice } from '../SurveyQuestions';
import { HotPopUpItem, PopUpItem } from '@/types/HomeScreenType';
import { PopularItem, RecommendedItem } from '@/types/PopUpEntryScreen';
import { MyReservation, PaymentRecord } from '../MyPageScreen';

export type ApiResponse<T> = Promise<GlobalResponse<T>>;
export type ApiResult<T> = Promise<T>;

export type GlobalResponse<T> = {
  success: boolean;
  status: number;
  data: T;
  timestamp: string;
};

export type ErrorResponse<T> = {
  errorClassName: T;
  message: string;
  itemId: number;
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
  memberId: number;
  nickname: string;
  age: AgeOption;
  gender: GenderOption;
  status: string;
  role: 'USER';
};

export type GetHotItemsResponse = ItemUrlType[];
export type GetDefaultItemsResponse = ItemUrlType[];

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

export type PostPaymentReadyResponse = {
  buyerName: string;
  name: string;
  amount: number;
  merchantUid: string;
};

export type GetPopUpDetailAllItemsResponse = {
  content: ItemUrlType[];
  isLast: boolean;
};

export type popUpMarkerItemsResponse = popUpMarkerItem[];

export type GetPopUpMarkerItemsResponse = popUpMarkerItem[];

export type GetHotPopUpItemsResponse = HotPopUpItem[];

export type GetPopUpAllItemsResponse = {
  content: PopUpItem[];
  isLast: boolean;
};

export type GetRecommendedItemsResponse = RecommendedItem[];

export type GetPopularItemsResponse = PopularItem[];

export type GetPopUDetailAllItemsResponse = {
  content: ItemUrlType[];
  isLast: boolean;
};

export type PostReservationErrorResponse = {
  errorClassName: string;
  message: string;
};

export type GetMyReservationResponse = MyReservation[];

export type GetUpComingTicketResponse = {
  reservationId: string;
  popupId: number;
  popupName: string;
  reservationDate: string;
  reservationTime: string;
  reservationDay: string;
  address: string;
  latitude: number;
  longitude: number;
  qrImage: string;
};

export type PostPaymentReadyErrorResponse = ErrorResponse<'ITEM_NOT_FOUND' | 'OUT_OF_STOCK'>;

export type GetMyPaymentsResponse = {
  content: PaymentRecord[];
  isLast: boolean;
};
