// SurveyQuestion.style.ts
import styled from 'styled-components/native';
import { getThemeColor, getThemeFont, getThemeFontWeight } from '@/types';
import { Dimensions } from 'react-native';

// 화면 너비 계산
const { width: SCREEN_WIDTH } = Dimensions.get('window');



export const Container = styled.View`
  flex: 1;
  background-color: black;
  align-items: center;
  padding-top: 75px;
`;

export const Title = styled.Text`
  color: ${getThemeColor('gray01')};
  font-family: ${getThemeFont('pretendard')};
  font-weight: ${getThemeFontWeight('bold')};
  font-size: 16px;
  margin-bottom: 16px;
`;

export const GiftImage = styled.Image`
  width: 160px;
  height: 160px;
  margin-bottom: 14px;
  z-index: 2;
`;

export const Card = styled.View`
  width: 101%;
  background-color: black;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  border: 1px solid ${getThemeColor('gray03')};
  padding: 80px 20px 20px;
  align-items: center;
  box-shadow: 5px 5px 20px white;
`;

export const ProgressBarContainer = styled.View`
  width: 100%;
  position: relative;
  margin-bottom: 52px;
`;

//프로세스바 회색
export const ProgressBar = styled.View`
  width: 100%;
  height: 4px;
  background-color: ${getThemeColor('gray05')};
  border-radius: 2px;
`;

export const ProgressFill = styled.View<{ width: string }>`
  position: absolute;
  top: 0;
  left: 0;
  width: ${(props: { width: string }) => props.width};
  height: 5 px;
  background-color: '#B7C8FF';
  border-radius: 2px;
`;

//진행 중 도트 : background-color어케해야하눈가 ...  4일때는 왜 우측까지 있는가 
export const ProgressDot = styled.View<{ position: string; isActive: boolean }>`
  position: absolute;
  left: ${(props: { position: string; isActive: boolean }) => props.position};
  top: -10px;
  width: 22px;
  height: 22px;
  background-color: ${(props: { position: string; isActive: boolean }) =>
    props.isActive ? '#B7C8FF' : getThemeColor('gray05')};
  border-radius: 100%;
  justify-content: center;
  align-items: center;
`;

//숫자 1~4
export const StepText = styled.Text`
  color: ${getThemeColor('gray01')};
  font-size: 14px;
  
`;

//질문 4가지 : 글씨 크기가 좀 큰거같기도 .. 
export const QuestionText = styled.Text`
  color: ${getThemeColor('gray01')};
  font-size: 24px;
  font-family: ${getThemeFont('pretendard')};
  font-weight: ${getThemeFontWeight('bold')};
  text-align: center;
  margin-bottom: 56px;
`;

export const OptionButton = styled.TouchableOpacity<{ isSelected: boolean }>`
  width: ${SCREEN_WIDTH - 60}px;
  height: 51px;
  border-radius: 16px;
  border-width: 1px;
  border-color: ${(props: { isSelected: boolean }) =>
    props.isSelected ? getThemeColor('gray05') : getThemeColor('gray05')};
  background-color: ${(props: { isSelected: boolean }) =>
    props.isSelected ? '#2a2a2a' : getThemeColor('gray05')};
  justify-content: center;
  padding-horizontal: 16px;
  margin-bottom: 12px;
`;

export const OptionText = styled.Text<{ isSelected: boolean }>`
  color: ${(props: { isSelected: boolean }) =>
    props.isSelected ? getThemeColor('gray05') : getThemeColor('gray01')};
  font-size: 16px;
`;

export const BottomActions = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: ${SCREEN_WIDTH - 60}px;
  margin-top: 24px;
`;

export const PrevButton = styled.TouchableOpacity`
  flex: 1;
  height: 51px;
  background-color: ${getThemeColor('gray09')};
  border-radius: 16px;
  justify-content: center;
  align-items: center;
  margin-right: 8px;
`;

export const ButtonText = styled.Text`
  font-size: 16px;
  color: ${getThemeColor('gray01')};
  font-weight: ${getThemeFontWeight('semibold')};
`;
