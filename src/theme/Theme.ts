import { DefaultTheme } from 'styled-components/native';

export const Theme: DefaultTheme = {
  colors: {
    gray01: '#FFFFFF',
    gray02: '#F9F9FA',
    gray03: '#D9D9D9',
    gray04: '#BCBCBE',
    gray05: '#929292',
    gray06: '#767676',
    gray07: '#5C5C5C',
    gray08: '#383838',
    gray09: '#2E2E2E',
    gray10: '#202020',
    gray11: '#000000',
  },
  gradients: {
    button: {
      colors: ['#BFF0F5', '#E0D9FF'],
      start: { x: 0, y: 0 },
      end: { x: 1, y: 0 },
    },
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
      inter: 'InterVariable',
    },
  },
  radius: {
    small: 4,
    medium: 8,
    large: 16,
    round: 9999,
  },
};
