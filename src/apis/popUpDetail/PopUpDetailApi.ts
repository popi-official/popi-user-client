import {
  ApiResponse,
  GetPopUpDetailResponse,
  GetPopUpDetailAllItemsResponse,
  GetHotItemsResponse,
  GetDefaultItemsResponse,
} from '@/types/api/ApiResponseType';
import { api } from '../config/Axios';
import {
  GetDefaultItemsRequest,
  GetHotItemsRequest,
  GetPopUpDetailAllItemsRequest,
  GetPopUpDetailRequest,
} from '@/types/api/ApiRequestType';
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

export const getHotItems = async ({
  popupId,
}: GetHotItemsRequest): ApiResponse<GetHotItemsResponse> => {
  const response = await api.get(`/items/${popupId}/popularity`);
  return response.data;
};

export const getDefaultItems = async ({
  popupId,
}: GetDefaultItemsRequest): ApiResponse<GetDefaultItemsResponse> => {
  const response = await api.get(`/items/${popupId}/default`);
  return response.data;
};
