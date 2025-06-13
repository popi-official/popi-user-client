import { getThemeColor } from '@/types';
import styled from 'styled-components/native';

export const S = {
  Container: styled.TouchableOpacity``,

  BackButtonIcon: styled.Image`
    width: 24px;
    height: 24px;
    tint-color: ${getThemeColor('gray01')};
    transform: rotate(180deg);
  `,
};
