import {
  ApiResponse,
  GetPopUpDetailResponse,
  GetPopUpDetailAllItemsResponse,
} from '@/types/api/ApiResponseType';
import { api } from '../config/Axios';
import { GetPopUpDetailAllItemsRequest, GetPopUpDetailRequest } from '@/types/api/ApiRequestType';
import { SEARCH_SIZE } from '@/constants/Options';

export const getPopUpDetailAllItems = async ({
  popupId,
  lastItemId,
}: GetPopUpDetailAllItemsRequest): ApiResponse<GetPopUpDetailAllItemsResponse> => {
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
