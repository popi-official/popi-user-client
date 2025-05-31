import {
  ApiResponse,
  GetItemSearchResponse,
  GetPopUpSearchResponse,
} from '@/types/api/ApiResponseType';
import { api } from '../config/Axios';
import { SEARCH_SIZE } from '@/constants/Options';
import { GetSearchItemReqeust, GetSearchPopUpRequest } from '@/types/api/ApiRequestType';

export const getSearchPopUp = async ({
  keyword,
  lastPopUpId,
}: GetSearchPopUpRequest): ApiResponse<GetPopUpSearchResponse> => {
  const response = await api.get(
    `/popups?keyword=${keyword}${lastPopUpId ? `&lastPopUpId=${lastPopUpId}` : ''}&size=${SEARCH_SIZE}`,
  );
  return response.data;
};

export const getSearchPopUpItem = async ({
  keyword,
  selectedPopUpId,
  lastItemId,
}: GetSearchItemReqeust): ApiResponse<GetItemSearchResponse> => {
  const response = await api.get(
    `/items/${selectedPopUpId}?keyword=${keyword}${lastItemId ? `&lastItemId=${lastItemId}` : ''}&size=${SEARCH_SIZE}`,
  );
  return response.data;
};
