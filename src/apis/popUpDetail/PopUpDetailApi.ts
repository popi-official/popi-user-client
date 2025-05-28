import { ApiResponse, GetPopUDetailAllItemsResponse } from '@/types/api/ApiResponseType';
import { api } from '../config/Axios';
import { GetPopUDetailAllItemsRequest } from '@/types/api/ApiRequestType';
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
