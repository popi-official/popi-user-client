import { getSurveyQuestions, postSurveyAnswers } from '@/apis/survey/SurveyApi';
import { GetSurveyQuestionsRequest, PostSurveyAnswersRequest } from '@/types/api/ApiRequestType';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

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

export const useSurveyAnswersApi = ({
  onSuccess,
  onError,
}: {
  onSuccess: () => void;
  onError: (message: string) => void;
}) => {
  const queryClient = useQueryClient();

  const postSurveyAnswersMutation = useMutation({
    mutationFn: ({ popupId, answers }: { popupId: number; answers: PostSurveyAnswersRequest }) =>
      postSurveyAnswers(popupId, answers),

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['surveyAnswer'] });
      onSuccess();
    },

    onError: () => {
      onError('설문 제출에 실패했어요. 다시 시도해주세요.');
    },
  });

  return { postSurveyAnswersMutation };
};
