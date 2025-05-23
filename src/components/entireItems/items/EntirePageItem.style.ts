import { getThemeColor, getThemePretendardFont } from '@/types';
import styled from 'styled-components/native';

interface ContainerProps {
  itemWidth: number;
}

export const S = {
  Container: styled.View<ContainerProps>`
    flex: 1;
    width: ${(props: ContainerProps) => props.itemWidth}px;
  `,

  ItemImage: styled.Image<ContainerProps>`
    width: 100%;
    height: ${(props: ContainerProps) => props.itemWidth}px;
    border-radius: 8px;
  `,

  TitleText: styled.Text`
    margin-top: 10px;
    color: ${getThemeColor('gray01')};
    font-family: ${getThemePretendardFont('semibold')};
    font-size: 14px;
  `,

  PriceText: styled.Text`
    margin-top: 8px;
    font-family: ${getThemePretendardFont('semibold')};
    text-align: right;
    color: ${getThemeColor('gray01')};
    font-size: 13px;
  `,
};
