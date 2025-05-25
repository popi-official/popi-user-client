import {
  ApiResponse,
  PostItemSearchResponse,
  PostPopUpSearchResponse,
} from '@/types/api/ApiResponseType';
import { api } from '../config/Axios';
import { PostSearchItemReqeust, PostSearchPopUpRequest } from '@/types/api/ApiRequestType';
import { SEARCH_SIZE } from '@/constants/Options';

export const postSearchPopUp = async ({
  keyword,
  lastPopUpId,
}: PostSearchPopUpRequest): ApiResponse<PostPopUpSearchResponse> => {
  const response = await api.post(
    `/popups?keyword=${keyword}${lastPopUpId ? `&lastPopUpId=${lastPopUpId}` : ''}&size=${SEARCH_SIZE}`,
  );
  return response.data;
};

export const postSearchPopUpItem = async ({
  keyword,
  selectedPopUpId,
  lastItemId,
}: PostSearchItemReqeust): ApiResponse<PostItemSearchResponse> => {
  const response = await api.post(
    `/popups/${selectedPopUpId}/items?keyword=${keyword}${lastItemId ? `&lastItemId=${lastItemId}` : ''}&size=${SEARCH_SIZE}`,
  );
  return response.data;
};
