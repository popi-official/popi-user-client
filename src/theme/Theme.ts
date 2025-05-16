const theme = {
  colors: {
    slate50: 'string',
    slate100: 'string',
    // ... 기존 colors 속성들
  },
  mediaSize: {
    /* ... */
  },
  fontSize: {
    /* ... */
  },
  size: {
    /* ... */
  },
  // 누락된 속성들 추가
  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
  },
  typography: {
    fontSize: {
      small: 12,
      medium: 16,
      large: 20,
      xlarge: 24,
    },
    fontWeight: {
      normal: '400',
      medium: '500',
      bold: '700',
    },
  },
  borderRadius: {
    small: 4,
    medium: 8,
    large: 16,
    round: 9999,
  },
};

export default theme;

export type Theme = typeof theme;
