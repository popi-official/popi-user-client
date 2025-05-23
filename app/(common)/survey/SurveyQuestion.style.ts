import styled from 'styled-components/native';
import { getThemeColor, getThemeFontWeight, getThemePretendardFont } from '@/types';
import { Dimensions } from 'react-native';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

export const Container = styled.View`
  flex: 1;
  background-color: black;
  align-items: center;
  padding-top: 75px;
`;

export const Title = styled.Text`
  color: ${getThemeColor('gray01')};
  font-family: ${getThemePretendardFont('bold')};
  font-size: 16px;
  margin-bottom: -10px;
`;

export const GiftImage = styled.Image`
  width: 328px;
  height: 228px;
  margin-bottom: -20px;
  z-index: 2;
`;

export const Card = styled.View`
  flex: 1;
  width: 101%;
  background-color: #1a1a1a;
  justify-content: space-between;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  border: 1px solid ${getThemeColor('gray03')};
  padding: 40px 30px 30px;
  align-items: center;
  padding-left: 30px;
  padding-right: 30px;
`;

export const ProgressBarContainer = styled.View`
  width: 100%;
  position: relative;
  margin-bottom: 52px;
  padding-left: 45px;
  padding-right: 45px;
`;

//프로세스바 회색
export const ProgressBar = styled.View`
  position: absolute;
  width: 100%;
  height: 4px;
  background-color: ${getThemeColor('gray05')};
  border-radius: 2px;
  margin-left: 36px;
`;

export const ProgressFill = styled.View<{ width: string }>`
  position: absolute;
  top: 0;
  left: 0;
  width: ${(props: { width: string }) => props.width};
  height: 4px;
  background-color: #b7c8ff;
  border-radius: 2px;
  margin-left: 36px;
`;

//진행 중 도트 : background-color어케해야하눈가 ...  왜 우측까지 있는가
export const ProgressDot = styled.View<{ position: string; isActive: boolean }>`
  position: absolute;
  left: ${(props: { position: string; isActive: boolean }) => props.position};
  top: -10px;
  width: 22px;
  height: 22px;
  margin-left: 36;
  margin-right: 36;
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
  font-family: ${getThemePretendardFont('semibold')};
  text-align: center;
  margin-bottom: 40px;
`;

//색상완료
export const OptionButton = styled.TouchableOpacity<{ isSelected: boolean }>`
  width: ${SCREEN_WIDTH - 60}px;
  height: 51px;
  border-radius: 16px;
  border-width: 1px;
  border-color: ${(props: { isSelected: boolean }) =>
    props.isSelected ? '#DDE0FC' : getThemeColor('gray05')};
  background-color: ${(props: { isSelected: boolean }) =>
    props.isSelected ? '#4E4F59' : '#1A1A1A'};
  justify-content: center;

  padding-left: 20;
  padding-right: 20;
  margin-bottom: 12px;
`;

export const OptionText = styled.Text<{ isSelected: boolean }>`
  color: ${(props: { isSelected: boolean }) =>
    props.isSelected ? getThemeColor('gray01') : getThemeColor('gray05')};
  font-size: 16px;
`;

export const BottomActions = styled.SafeAreaView`
  flex-direction: row;
  width: 100%;
  margin-top: 24px;
  margin-bottom: 30px;
  gap: 6px;
  height: 60px;
`;

export const ButtonText = styled.Text`
  font-size: 16px;
  color: ${getThemeColor('gray01')};
  font-weight: ${getThemeFontWeight('semibold')};
`;
