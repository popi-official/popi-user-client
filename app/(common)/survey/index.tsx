// SurveyQuestionPage.tsx
import React, { useState } from 'react';
import * as S from './SurveyQuestion.style';
import CustomGradientBtn from '@/components/customGradientBtn/CustomGradientBtn';
import CustomGrayBtn from '@/components/customGrayBtn/CustomGrayBtn';

const OPTIONS = ['의류', '문구', '포토카드', '인형', '기타'];
const QUESTIONS = [
  '어떤 종류의 굿즈를\n가장 선호하시나요?',
  '두 번째 질문 텍스트를\n여기에 넣어주세요',
  '세 번째 질문 텍스트를\n여기에 넣어주세요',
  '네 번째 질문 텍스트를\n여기에 넣어주세요',
];
const TOTAL = QUESTIONS.length;

const SurveyQuestionPage: React.FC = () => {
  const [step, setStep] = useState(1);
  const [selected, setSelected] = useState<string | null>(null);
  const progressPercent = `${((step - 1) / (TOTAL - 1)) * 100}%`;

  return (
    <S.Container>
      <S.Title>설문에 참여하고 굿즈 선물 받아가요!</S.Title>
      <S.GiftImage source={require('@/assets/images/survey/survey-gift.webp')} />

      <S.Card>
        <S.ProgressBarContainer>
          <S.ProgressBar />
          <S.ProgressFill width={progressPercent} />
          <S.ProgressDot position={progressPercent} isActive>
            <S.StepText>{step}</S.StepText>
          </S.ProgressDot>
        </S.ProgressBarContainer>

        <S.QuestionText>{QUESTIONS[step - 1]}</S.QuestionText>

        {OPTIONS.map(opt => (
          <S.OptionButton key={opt} isSelected={selected === opt} onPress={() => setSelected(opt)}>
            <S.OptionText isSelected={selected === opt}>{opt}</S.OptionText>
          </S.OptionButton>
        ))}

        <S.BottomActions>
          <CustomGrayBtn
            title="이전"
            onPress={() => {
              setStep(prev => Math.max(1, prev - 1));
              setSelected(null);
            }}
            disabled={step === 1}
            style={{ width: '50%' }}
            fontSize={18}
          />

          <CustomGradientBtn
            title="다음"
            onPress={() => {
              if (step < TOTAL) {
                setStep(prev => prev + 1);
                setSelected(null);
              }
            }}
            disabled={!selected}
            style={{ flex: 1 }}
            fontSize={18}
          />
        </S.BottomActions>
      </S.Card>
    </S.Container>
  );
};

export default SurveyQuestionPage;
