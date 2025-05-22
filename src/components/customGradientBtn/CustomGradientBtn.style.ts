import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';
import { getThemeFontSize, getThemeFontWeight } from '@/types';

interface ButtonTextProps {
  fontSize?: number;
  fontWeight?: string;
}

export const S = {
  ButtonContainer: styled.TouchableOpacity`
    overflow: hidden;
  `,

  GradientBackground: styled(LinearGradient)`
    padding: 16px;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  `,

  ButtonText: styled.Text<ButtonTextProps>`
    font-size: ${(props: ButtonTextProps) =>
      props.fontSize ? `${props.fontSize}px` : getThemeFontSize('medium')(props)};
    font-weight: ${(props: ButtonTextProps) =>
      props.fontWeight ? props.fontWeight : getThemeFontWeight('semibold')(props)};
    color: #000000;
  `,

  ButtonContent: styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: center;
  `,

  Icon: styled.Image`
    width: 18px;
    height: 18px;
    margin-right: 6px;
  `,
};
