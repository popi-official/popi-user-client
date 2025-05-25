import { getThemeColor } from '@/types';
import styled from 'styled-components/native';

export const S = {
  // screen
  MapScreenContainer: styled.View`
    flex: 1;
    background-color: ${getThemeColor('gray11')};
  `,

  // Bottom
  BottomArea: styled.View`
    height: 48px;
    width: 100%;
  `,
};
