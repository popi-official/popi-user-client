import { getThemeColor, getThemePretendardFont } from '@/types';
import styled from 'styled-components/native';

export const S = {
  SearchBarContainer: styled.TouchableOpacity`
    border-width: 1px;
    border-color: ${getThemeColor('gray07')};
    background-color: ${getThemeColor('gray10')};
    border-radius: 50px;
    flex-direction: row;
    align-items: center;
    padding-left: 18px;
    padding-right: 18px;
    margin-top: 32px;
  `,

  PlaceholderText: styled.Text`
    font-family: ${getThemePretendardFont('regular')};
    font-size: 18;
    color: ${getThemeColor('gray05')};
    flex: 1;
    vertical-align: middle;
    padding-top: 9px;
    padding-bottom: 9px;
  `,

  SearchIcon: styled.Image`
    width: 26px;
    height: 26px;
    flex-shrink: 0;
  `,
};
