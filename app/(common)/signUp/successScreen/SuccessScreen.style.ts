import { getThemeColor, getThemePretendardFont } from '@/types';
import { Image } from 'react-native'; // Image 추가
import styled from 'styled-components/native';

export const S = {
  SuccessScreenContainer: styled.View`
    flex: 1;
    position: relative;
    background-color: ${getThemeColor('gray11')};
  `,
  ContentContainer: styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    z-index: 1;
    padding-left: 12px;
    padding-right: 12px;
  `,
  Title: styled.Text`
    color: ${getThemeColor('gray04')};
    font-size: 14px;
    font-family: ${getThemePretendardFont('semibold')};
    margin-bottom: 10px;
  `,
  Nickname: styled.Text`
    color: ${getThemeColor('gray02')};
    font-size: 26px;
    font-family: ${getThemePretendardFont('semibold')};
  `,
  Welcome: styled.Text`
    color: ${getThemeColor('gray02')};
    font-size: 26px;
    font-family: ${getThemePretendardFont('semibold')};
    margin-bottom: 30px;
    margin-top: 4px;
  `,
  ContentImage: styled(Image)`
    width: 480px;
    height: 418px;
  `,
};
