import { getThemeColor, getThemeFontWeight } from '@/types';
import { Dimensions, Image } from 'react-native'; // Image 추가
import styled from 'styled-components/native';

const { width, height } = Dimensions.get('window');

export const S = {
  SuccessScreenContainer: styled.View`
    flex: 1;
    position: relative;
  `,
  BackgroundImageContainer: styled.View`
    position: absolute;
    width: ${width}px;
    height: ${height}px;
  `,
  BackgroundImage: styled(Image)`
    width: 100%;
    height: 100%;
  `,
  ContentContainer: styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    z-index: 1;
  `,
  Title: styled.Text`
    color: ${getThemeColor('gray04')};
    font-size: 14px;
    font-weight: ${getThemeFontWeight('semibold')};
    margin-bottom: 10px;
  `,
  Nickname: styled.Text`
    color: ${getThemeColor('gray02')};
    font-size: 26px;
    font-weight: ${getThemeFontWeight('semibold')};
  `,
  Welcome: styled.Text`
    color: ${getThemeColor('gray02')};
    font-size: 26px;
    font-weight: ${getThemeFontWeight('semibold')};
    margin-bottom: 30px;
    margin-top: 4px;
  `,
  ContentImage: styled(Image)`
    width: 147;
    height: 147px;
    resize-mode: contain;
  `,
};
