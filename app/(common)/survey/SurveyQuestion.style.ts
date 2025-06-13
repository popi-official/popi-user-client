import styled from 'styled-components/native';
import { getThemeColor, getThemePretendardFont } from '@/types';
import { Dimensions } from 'react-native';
import { Animated } from 'react-native';
import { EdgeInsets } from 'react-native-safe-area-context';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

type InsetProps = {
  insets: EdgeInsets;
};

export const Container = styled.View<InsetProps>`
  flex: 1;
  background-color: black;
  align-items: center;
  padding-top: ${(props: InsetProps) => props.insets.top}px;
`;

export const Title = styled.Text`
  color: ${getThemeColor('gray01')};
  font-family: ${getThemePretendardFont('bold')};
  font-size: 18px;
  margin-bottom: -20px;
`;

export const GiftImage = styled.Image`
  width: 328px;
  height: 228px;
  margin-bottom: -10px;
  z-index: 2;
`;

export const Card = styled.View`
  flex: 1;
  width: 101%;
  background-color: #1a1a1a;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  border: 1px solid ${getThemeColor('gray03')};
  padding: 40px 30px 24px;
  align-items: center;
  margin-bottom: -2px;
  justify-content: space-between;
`;

export const ProgressBarContainer = styled.View`
  width: calc(100% - 90px);
  position: relative;
  margin-bottom: 50px;
  margin-left: 15px;
  margin-right: 15px;
`;

// 프로그레스 바 보라색
export const ProgressBar = styled.View`
  position: absolute;
  width: 100%;
  height: 4px;
  background-color: ${getThemeColor('gray05')};
  border-radius: 2px;
`;

// 프로그레스 바 보라색
export const AnimatedProgressFill = styled(Animated.View)`
  position: absolute;
  top: 0;
  left: 0;
  height: 4px;
  background-color: #b7c8ff;
  border-radius: 2px;
`;

// 진행 중 도트
export const AnimatedProgressDot = styled(Animated.View)`
  position: absolute;
  top: -10px;
  width: 22px;
  height: 22px;
  background-color: #b7c8ff;
  border-radius: 50px;
  justify-content: center;
  align-items: center;
`;

// 숫자 1~4
export const StepText = styled.Text`
  font-family: ${getThemePretendardFont('medium')};
  color: ${getThemeColor('gray01')};
  font-size: 14px;
`;

// 질문 4가지
export const QuestionText = styled.Text`
  color: ${getThemeColor('gray01')};
  font-size: 23px;
  font-family: ${getThemePretendardFont('semibold')};
  text-align: center;
  line-height: 32px;
  margin-bottom: 40px;
`;

// 선택 색상
export const OptionButton = styled.TouchableOpacity<{ isSelected: boolean }>`
  width: ${SCREEN_WIDTH - 60}px;
  height: 50px;
  border-radius: 16px;
  border-width: 1px;
  border-color: ${(props: { isSelected: boolean }) =>
    props.isSelected ? '#DDE0FC' : getThemeColor('gray05')};
  background-color: ${(props: { isSelected: boolean }) =>
    props.isSelected ? '#4E4F59' : '#1A1A1A'};
  justify-content: center;
  padding-left: 20;
  padding-right: 20;
  margin-bottom: 10px;
`;

export const OptionText = styled.Text<{ isSelected: boolean }>`
  color: ${(props: { isSelected: boolean }) =>
    props.isSelected ? getThemeColor('gray01') : getThemeColor('gray05')};
  font-size: 16px;
  font-family: ${getThemePretendardFont('medium')};
`;

export const BottomActions = styled.SafeAreaView`
  display: flex;
  flex-direction: row;
  width: ${SCREEN_WIDTH - 60}px;
  margin-top: 20px;
  margin-bottom: 24px;
  gap: 6px;
  height: 56px;
`;

export const ButtonText = styled.Text`
  font-size: 16px;
  color: ${getThemeColor('gray01')};
  font-weight: ${getThemePretendardFont('semibold')};
`;
