import { getThemeColor, getThemeInterFont, getThemePretendardFont } from '@/types';
import styled from 'styled-components/native';

export const S = {
  EntireItemsContainer: styled.SafeAreaView`
    flex: 1;
    background-color: ${getThemeColor('gray11')};
  `,
  ListHeaderContainer: styled.View``,
  ItemCategory: styled.Text`
    color: ${getThemeColor('gray01')};
    font-size: 26px;
    font-family: ${getThemeInterFont('blackItalic')};
  `,
  ListHeaderLabel: styled.Text`
    font-family: ${getThemePretendardFont('extrabold')};
    margin-bottom: 16px;
    margin-top: 20px;
    font-size: 26px;
    color: ${getThemeColor('gray01')};
  `,
};
