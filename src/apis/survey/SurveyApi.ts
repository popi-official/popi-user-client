import { ApiResponse, GetSurveyQuestionsResponse, NoResponse } from '@/types/api/ApiResponseType';
import { api } from '../config/Axios';
import { GetSurveyQuestionsRequest, PostSurveyAnswersRequest } from '@/types/api/ApiRequestType';

export const getSurveyQuestions = async ({
  popupId,
}: GetSurveyQuestionsRequest): ApiResponse<GetSurveyQuestionsResponse> => {
  const response = await api.get(`/reservations/popups/${popupId}/survey`);
  return response.data;
};

export const postSurveyAnswers = async (
  popupId: number,
  answers: PostSurveyAnswersRequest,
): ApiResponse<NoResponse> => {
  const response = await api.post(`/reservations/popups/${popupId}/survey`, answers);
  return response.data;
};
