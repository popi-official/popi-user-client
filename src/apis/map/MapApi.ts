import { ApiResponse, GetPopUpMarkerItemsResponse } from "@/types/api/ApiResponseType";
import { api } from "../config/Axios";

export const getMapPopUps = async (
    latMin: number,
    latMax: number,
    lngMin: number,
    lngMax: number
  ): ApiResponse<GetPopUpMarkerItemsResponse> => {
    const response = await api.get('/popups?minLat=37.48&maxLat=37.50&minLng=127.02&maxLng=127.06', {
      params: { latMin, latMax, lngMin, lngMax },
    });
    return response.data;
  };