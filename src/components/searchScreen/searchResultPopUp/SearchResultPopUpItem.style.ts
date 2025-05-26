import { getThemeColor, getThemePretendardFont } from '@/types';
import styled from 'styled-components/native';

export const S = {
  PopUpContainer: styled.Pressable`
    margin-bottom: 20px;
  `,

  PopUpImage: styled.Image`
    border-radius: 8px;
  `,

  PopUpInfoContainer: styled.View`
    padding-top: 10px;
  `,

  PopUpName: styled.Text`
    color: ${getThemeColor('gray01')};
    font-size: 15px;
    font-family: ${getThemePretendardFont('semibold')};
    margin-bottom: 2px;
    flex-shrink: 1;
  `,

  DateRow: styled.View`
    flex-direction: row;
    align-items: center;
    gap: 4px;
  `,

  DateIcon: styled.Image`
    width: 15px;
    height: 15px;
    tint-color: ${getThemeColor('gray04')};
  `,

  DateText: styled.Text`
    color: ${getThemeColor('gray04')};
    font-family: ${getThemePretendardFont('light')};
    font-size: 13px;
    margin-bottom: 2px;
    align-items: center;
  `,

  AddressRow: styled.View`
    flex-direction: row;
    align-items: center;
    gap: 4px;
    max-width: 100%;
  `,

  AddressIcon: styled.Image`
    width: 15px;
    height: 15px;
    tint-color: ${getThemeColor('gray04')};
  `,

  AddressText: styled.Text`
    color: ${getThemeColor('gray04')};
    font-family: ${getThemePretendardFont('light')};
    font-size: 13px;
    flex-shrink: 1;
  `,
};
