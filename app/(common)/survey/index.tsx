import React, { useEffect, useRef, useState } from 'react';
import * as S from './SurveyQuestion.style';
import CustomGradientBtn from '@/components/customGradientBtn/CustomGradientBtn';
import CustomGrayBtn from '@/components/customGrayBtn/CustomGrayBtn';
import { Dimensions, View } from 'react-native';
import { SurveyQuestionsMock } from '@/mocks/SurveyQuestionsMocks';
import { Animated } from 'react-native';
import { useRouter } from 'expo-router';

const QUESTIONS = [
  '어떤 종류의 굿즈를\n가장 선호하시나요?',
  '어떤 경로로 팝업스토어\n오픈 소식을 접하셨나요?',
  '이번 팝업스토어에 방문한\n가장 큰 이유는 무엇인가요?',
  '구매 시 중요하게 고려하는\n요소는 무엇인가요?',
];
const TOTAL = QUESTIONS.length;
const SCREEN_WIDTH = Dimensions.get('window').width;
const BUTTON_WIDTH = (SCREEN_WIDTH - 66) / 2;
const PROGRESS_WIDTH = SCREEN_WIDTH - 90;

const SurveyQuestionPage: React.FC = () => {
  const [step, setStep] = useState(1);
  const [selected, setSelected] = useState<number | null>(null);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number | null>>({});
  // const { surveyData } = getSurveyApi;
  const surveyData = SurveyQuestionsMock; // mock data
  const answers = surveyData[step - 1].options;
  const router = useRouter();

  // step 변경될 때 해당 step의 기존 답변 불러오기
  useEffect(() => {
    setSelected(selectedAnswers[step] ?? null);
  }, [selectedAnswers, step]);

  // 선택값 불러오기
  useEffect(() => {
    const currentSurvey = surveyData[step - 1];
    const saved = selectedAnswers[currentSurvey.surveyId] ?? null;
    setSelected(saved);
  }, [step, selectedAnswers, surveyData]);

  // 추후 POST 요청 Body
  // const requestBody = {
  //   memberAnswerCreateRequest: surveyData.map(survey => ({
  //     surveyId: survey.surveyId,
  //     choiceId: selectedAnswers[survey.surveyId],
  //   })),
  // };
  // console.log(requestBody);

  // 애니메이션
  const progress = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(progress, {
      toValue: (step - 1) / (TOTAL - 1),
      duration: 300,
      useNativeDriver: false,
    }).start();
  }, [progress, step]);

  const fillWidth = progress.interpolate({
    inputRange: [0, 1],
    outputRange: ['0%', '100%'],
  });

  const dotLeft = progress.interpolate({
    inputRange: [0, 1],
    outputRange: [0, PROGRESS_WIDTH - 22],
  });

  return (
    <S.Container>
      <S.Title>설문에 참여하고 굿즈 선물 받아가요!</S.Title>
      <S.GiftImage source={require('@/assets/images/survey/survey-gift.webp')} />

      <S.Card>
        <View>
          <S.ProgressBarContainer>
            <S.ProgressBar />
            <S.AnimatedProgressFill style={{ width: fillWidth }} />
            <S.AnimatedProgressDot style={{ left: dotLeft }}>
              <S.StepText>{step}</S.StepText>
            </S.AnimatedProgressDot>
          </S.ProgressBarContainer>

          <S.QuestionText>{QUESTIONS[step - 1]}</S.QuestionText>

          {answers.map(answer => (
            <S.OptionButton
              key={answer.choiceId}
              isSelected={selected === answer.choiceId}
              onPress={() => {
                const isSame = selected === answer.choiceId; // 토글
                const newChoiceId = isSame ? null : answer.choiceId;
                const currentSurveyId = surveyData[step - 1].surveyId;

                setSelected(newChoiceId);
                setSelectedAnswers(prev => ({
                  ...prev,
                  [currentSurveyId]: newChoiceId,
                }));
              }}
            >
              <S.OptionText isSelected={selected === answer.choiceId}>
                {answer.content}
              </S.OptionText>
            </S.OptionButton>
          ))}
        </View>

        <S.BottomActions>
          <CustomGrayBtn
            title="이전"
            onPress={() => {
              if (step === 1) {
                router.replace('/(tabs)/my');
              } else {
                setStep(prev => Math.max(1, prev - 1));
                setSelected(null);
              }
            }}
            style={{ width: BUTTON_WIDTH }}
            fontSize={18}
          />
          <CustomGradientBtn
            title={step === TOTAL ? '완료' : '다음'}
            disabled={!selected}
            onPress={() => {
              if (step < TOTAL) {
                setStep(prev => prev + 1);
                setSelected(null);
              } else {
                // 수정: 마지막일 때 제출 로직 호출
                //handleSubmit(); POST API 호출
                router.push({ pathname: '/(common)/popUpEntry', params: { isSurvey: 1 } });
              }
            }}
            style={{ width: BUTTON_WIDTH }}
            fontSize={18}
          />
        </S.BottomActions>
      </S.Card>
    </S.Container>
  );
};

export default SurveyQuestionPage;
