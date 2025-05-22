import { getThemeInterFont, getThemePretendardFont } from '@/types';
import styled from 'styled-components/native';

export const S = {
  StyleContainer: styled.View`
    flex: 1;
  `,
  TextTest: styled.Text`
    font-family: ${getThemePretendardFont('bold')};
  `,
  TextInterTest: styled.Text`
    font-family: ${getThemeInterFont('semibold')};
  `,
};
