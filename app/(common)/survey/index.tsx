import React, { useState } from 'react';
import * as S from './SurveyQuestion.style';
import CustomGradientBtn from '@/components/customGradientBtn/CustomGradientBtn';
import CustomGrayBtn from '@/components/customGrayBtn/CustomGrayBtn';
import { Dimensions, View } from 'react-native';
import { SurveyQuestionsMock } from '@/mocks/SurveyQuestionsMocks';

const QUESTIONS = [
  '어떤 종류의 굿즈를\n가장 선호하시나요?',
  '어떤 경로로 팝업스토어\n오픈 소식을 접하셨나요?',
  '이번 팝업스토어에 방문한\n가장 큰 이유는 무엇인가요?',
  '구매 시 중요하게 고려하는\n요소는 무엇인가요?',
];
const TOTAL = QUESTIONS.length;
const SCREEN_WIDTH = Dimensions.get('window').width;
const BUTTON_WIDTH = (SCREEN_WIDTH - 66) / 2;

const SurveyQuestionPage: React.FC = () => {
  const [step, setStep] = useState(1);
  const [selected, setSelected] = useState<string | null>(null);
  const progressPercent = `${((step - 1) / (TOTAL - 1)) * 100}%`;
  const dotLeft = (SCREEN_WIDTH - 90) * ((step - 1) / (TOTAL - 1)) - 11;
  const answers = SurveyQuestionsMock[step - 1].options;

  return (
    <S.Container>
      <S.Title>설문에 참여하고 굿즈 선물 받아가요!</S.Title>
      <S.GiftImage source={require('@/assets/images/survey/survey-gift.webp')} />

      <S.Card>
        <View>
          <S.ProgressBarContainer>
            <S.ProgressBar />
            <S.ProgressFill width={progressPercent} />
            <S.ProgressDot left={dotLeft} isActive>
              <S.StepText>{step}</S.StepText>
            </S.ProgressDot>
          </S.ProgressBarContainer>

          <S.QuestionText>{QUESTIONS[step - 1]}</S.QuestionText>

          {answers.map(answer => (
            <S.OptionButton
              key={answer.number}
              isSelected={selected === answer.content}
              onPress={() => setSelected(answer.content)}
            >
              <S.OptionText isSelected={selected === answer.content}>{answer.content}</S.OptionText>
            </S.OptionButton>
          ))}
        </View>

        <S.BottomActions>
          <CustomGrayBtn
            title="이전"
            onPress={() => {
              setStep(prev => Math.max(1, prev - 1));
              setSelected(null);
            }}
            disabled={step === 1}
            style={{ width: BUTTON_WIDTH }}
            fontSize={18}
          />
          <CustomGradientBtn
            title={step === TOTAL ? '완료' : '다음'}
            onPress={() => {
              if (step < TOTAL) {
                setStep(prev => prev + 1);
                setSelected(null);
              } else {
                // 수정: 마지막일 때 제출 로직 호출
                //handleSubmit();
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
