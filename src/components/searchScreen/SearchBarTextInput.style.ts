import { getThemeColor, getThemePretendardFont } from '@/types';
import styled from 'styled-components/native';

export const S = {
  SearchContainer: styled.View`
    background-color: ${getThemeColor('gray10')};
    border-radius: 50px;
    overflow: hidden;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding-horizontal: 16px;
    flex: 1;
    margin-horizontal: 12px;
    border-width: 1px;
  `,

  SearchInput: styled.TextInput`
    color: ${getThemeColor('gray01')};
    font-family: ${getThemePretendardFont('regular')};
    flex: 1;
    font-size: 18px;
  `,

  CloseButton: styled.Pressable`
    margin-left: 8px;
  `,

  CloseIcon: styled.Image`
    width: 15px;
    height: 15px;
  `,

  SearchButton: styled.Pressable`
    margin-left: 8px;
  `,

  SearchIcon: styled.Image`
    width: 26px;
    height: 26px;
    tint-color: ${getThemeColor('gray01')};
  `,
};
