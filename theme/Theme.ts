import { DefaultTheme } from 'styled-components/native';

export const Theme: DefaultTheme = {
  colors: {
    gray01: 'FFFFFF',
    gray02: 'F9F9FA',
    gray03: 'EDEDF1',
    gray04: 'DFDFE0',
    gray05: 'D8D8DA',
    gray06: 'C9C9CA',
    gray07: 'BCBCBE',
    gray08: '939494',
    gray09: '59595A',
    gray10: '1B1A1B',
  },
  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
  },
  typography: {
    fontSizes: {
      small: 12,
      medium: 16,
      large: 20,
      xlarge: 24,
    },
    fontWeights: {
      regular: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
    },
    fonts: {
      gmarket: 'GmarketSansTTFMedium',
      pretendard: 'PretendardVariable',
    },
  },
  radius: {
    small: 4,
    medium: 8,
    large: 16,
    round: 9999,
  },
};
