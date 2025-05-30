import { ApiResponse, GetPopUpMarkerItemsResponse } from '@/types/api/ApiResponseType';
import { api } from '../config/Axios';

export const getMapPopUps = async (
  latMin: number,
  latMax: number,
  lngMin: number,
  lngMax: number,
): ApiResponse<GetPopUpMarkerItemsResponse> => {
  const response = await api.get('/popups/map', {
    params: { latMin, latMax, lngMin, lngMax },
  });
  return response.data;
};
