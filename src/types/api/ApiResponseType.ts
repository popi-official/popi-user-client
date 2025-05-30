import { popUpMarkerItem } from '@/types/MapScreenType';
import { ItemPathType, ItemUrlType, ReservableDate } from '../DetailScreen';
import { PostItemSearch, PostPopUpSearch } from '../SearchScreenType';
import { AgeOption, GenderOption } from '../SignUpScreenType';
import { SurveyChoice } from '../SurveyQuestions';
import { HotPopUpItem, PopUpItem } from '@/types/HomeScreenType';
import { PopularItem, RecommendedItem } from '@/types/PopUpEntryScreen';

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
<<<<<<< HEAD

export type PostReservationErrorResponse = {
  errorClassName: string;
  message: string;
};

export type GetUpComingTicketResponse = {
  reservationId: string;
  popupName: string;
  reservationDate: string;
  reservationTime: string;
  reservationDay: string;
  address: string;
  latitude: number;
  longitude: number;
  qrImage: string;
};
=======
>>>>>>> 44bc60e ([LCR-250] fix: 사용하지 않는 타입 제거)
