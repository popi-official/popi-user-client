import {
  ApiResponse,
  GetHotItemResponse,
  GetPopUpAllItemsResponse,
} from '@/types/api/ApiResponseType';
import { api } from '../config/Axios';
import { GetPopUpAllItemsRequest } from '@/types/api/ApiRequestType';
import { SEARCH_SIZE } from '@/constants/Options';

export const getPopUpAllItems = async ({
  lastPopupId,
}: GetPopUpAllItemsRequest): ApiResponse<GetPopUpAllItemsResponse> => {
  const response = await api.get(
    `/popups/?${lastPopupId ? `lastPopupId=${lastPopupId}` : ''}&size=${SEARCH_SIZE}`,
  );
  return response.data;
};

export const getHotItemRequest = async (): ApiResponse<GetHotItemResponse> => {
  const response = await api.get('/popups/popularity');
  return response.data;
};
