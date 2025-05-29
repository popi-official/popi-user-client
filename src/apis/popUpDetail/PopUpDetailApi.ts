import {
  ApiResponse,
  GetPopUDetailAllItemsResponse,
  GetPopUpDetailResponse,
} from '@/types/api/ApiResponseType';
import { api } from '../config/Axios';
import { GetPopUDetailAllItemsRequest, GetPopUpDetailRequest } from '@/types/api/ApiRequestType';
import { SEARCH_SIZE } from '@/constants/Options';

export const getPopUDetailAllItems = async ({
  popupId,
  lastItemId,
}: GetPopUDetailAllItemsRequest): ApiResponse<GetPopUDetailAllItemsResponse> => {
  const response = await api.get(
    `/items/${popupId}?${lastItemId ? `lastItemId=${lastItemId}` : ''}&size=${SEARCH_SIZE}`,
  );
  return response.data;
};

export const getPopUpDetailInfo = async ({
  popupId,
}: GetPopUpDetailRequest): ApiResponse<GetPopUpDetailResponse> => {
  const response = await api.get(`/popups/${popupId}`);
  return response.data;
};
