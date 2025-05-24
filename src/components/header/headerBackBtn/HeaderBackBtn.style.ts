import { getThemeColor } from '@/types';
import styled from 'styled-components/native';

export const S = {
  BackButtonContainer: styled.TouchableOpacity`
    justify-content: center;
    margin-left: 0px;
    padding-left: 0px;
  `,

  BackButtonIcon: styled.Image`
    width: 24px;
    height: 24px;
    tint-color: ${getThemeColor('gray01')};
    transform: rotate(180deg);
  `,
};
