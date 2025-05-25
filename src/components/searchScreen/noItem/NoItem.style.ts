import { getThemeColor, getThemePretendardFont } from '@/types';
import styled from 'styled-components/native';

export const S = {
  NoItemContainer: styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    padding-horizontal: 20px;
    min-height: 400px;
    gap: 64px;
  `,

  NoItemTitle: styled.Text`
    color: ${getThemeColor('gray01')};
    font-size: 19px;
    font-family: ${getThemePretendardFont('bold')};
    text-align: center;
    line-height: 26px;
  `,

  NoItemImage: styled.Image`
    width: 256px;
    height: 190px;
    margin-bottom: 20px;
  `,
};
