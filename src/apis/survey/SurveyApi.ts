import { ApiResponse, GetSurveyQuestionsResponse } from '@/types/api/ApiResponseType';
import { api } from '../config/Axios';
import { GetSurveyQuestionsRequest } from '@/types/api/ApiRequestType';

export const getSurveyQuestions = async ({
  popupId,
}: GetSurveyQuestionsRequest): ApiResponse<GetSurveyQuestionsResponse> => {
  const response = await api.get(`/reservations/${popupId}/survey`);
  return response.data;
};
