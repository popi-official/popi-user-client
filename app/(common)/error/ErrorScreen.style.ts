import CustomGradientBtn from '@/components/customGradientBtn/CustomGradientBtn';
import { getThemePretendardFont, getThemeColor } from '@/types';
import styled from 'styled-components/native';

export const S = {
  Container: styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: ${getThemeColor('gray11')};
    padding: 12px;
  `,

  TextContainer: styled.View`
    align-items: center;
    margin-bottom: 40px;
  `,

  Title: styled.Text`
    font-size: 19px;
    font-family: ${getThemePretendardFont('bold')};
    color: ${getThemeColor('gray01')};
    margin-bottom: 6px;
  `,

  Subtitle: styled.Text`
    font-size: 15px;
    font-family: ${getThemePretendardFont('bold')};
    color: ${getThemeColor('gray04')};
  `,

  ImageWrapper: styled.View`
    width: 256;
    height: 191;
    margin-bottom: 68;
  `,

  GradientButton: styled(CustomGradientBtn)`
    width: 155px;
    height: 46px;
    font-size: 18px;
    font-family: ${getThemePretendardFont('semibold')};
  `,
};
