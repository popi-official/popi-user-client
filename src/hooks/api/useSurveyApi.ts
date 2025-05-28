import { getSurveyQuestions } from '@/apis/survey/SurveyApi';
import { GetSurveyQuestionsRequest } from '@/types/api/ApiRequestType';
import { useQuery } from '@tanstack/react-query';

export const useSurveyApi = ({ popupId }: GetSurveyQuestionsRequest) => {
  const query = useQuery({
    queryFn: () => getSurveyQuestions({ popupId }),
    queryKey: ['설문지 조회', popupId],
  });

  return {
    questions: query.data?.data,
    isLoading: query.isLoading,
    isError: query.isError,
  };
};
