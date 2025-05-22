import styled from 'styled-components/native';
import { getThemeFontSize, getThemeFontWeight, getThemeColor } from '@/types';

interface ButtonTextProps {
  fontSize?: number;
  fontWeight?: string;
}

export const S = {
  ButtonContainer: styled.TouchableOpacity`
    overflow: hidden;
    padding: 16px;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background-color: ${getThemeColor('gray09')};
  `,

  ButtonText: styled.Text<ButtonTextProps>`
    font-size: ${(props: ButtonTextProps) =>
      props.fontSize ? `${props.fontSize}px` : getThemeFontSize('medium')(props)};
    font-weight: ${(props: ButtonTextProps) =>
      props.fontWeight ? props.fontWeight : getThemeFontWeight('semibold')(props)};
    color: ${getThemeColor('gray05')};
  `,
};
