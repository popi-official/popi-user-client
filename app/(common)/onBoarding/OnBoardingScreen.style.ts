import { getThemeColor, getThemeFont, getThemeFontSize, getThemeFontWeight } from '@/types';
import styled from 'styled-components/native';
import { Dimensions, Image } from 'react-native';

const { width, height } = Dimensions.get('window');

export const S = {
  OnBoardingContainer: styled.View`
    flex: 1;
  `,
  OnBoardingScreenContainer: styled.View`
    flex: 1;
    position: relative;
    width: ${width}px;
    height: ${height}px;
  `,

  BackgroundImageContainer: styled.View`
    position: absolute;
    width: 100%;
    height: 100%;
  `,

  BackgroundImage: styled(Image)`
    width: 100%;
    height: 100%;
  `,

  ContentWrapper: styled.View`
    flex: 1;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 50px;
  `,

  IllustrationContainer: styled.View`
    flex: 2;
    justify-content: center;
    align-items: center;
  `,

  IllustrationImage: styled(Image)`
    width: 410px;
    height: 404px;
  `,

  ContentTextContainer: styled.View`
    margin-bottom: 50px;
  `,

  ContentText: styled.Text`
    font-size: ${getThemeFontSize('large')};
    font-family: ${getThemeFont('pretendard')};
    color: ${getThemeColor('gray01')};
    text-align: center;
  `,

  ButtonContainer: styled.View`
    width: 90%;
    align-items: center;
  `,

  ButtonText: styled.Text`
    font-size: ${getThemeFontSize('medium')};
    font-weight: ${getThemeFontWeight('semibold')};
    color: ${getThemeColor('gray10')};
  `,
};
