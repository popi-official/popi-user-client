import 'styled-components/native';

declare module 'styled-components/native' {
  export interface DefaultTheme {
    colors: {
      gray01: string;
      gray02: string;
      gray03: string;
      gray04: string;
      gray05: string;
      gray06: string;
      gray07: string;
      gray08: string;
      gray09: string;
      gray10: string;
    };
    spacing: {
      xs: number;
      sm: number;
      md: number;
      lg: number;
      xl: number;
    };
    typography: {
      fontSizes: {
        small: number;
        medium: number;
        large: number;
        xlarge: number;
      };
      fontWeights: {
        regular: string;
        medium: string;
        semibold: string;
        bold: string;
      };
      fonts: {
        gmarket: string;
        pretendard: string;
      };
    };
    radius: {
      small: number;
      medium: number;
      large: number;
      round: number;
    };
  }
}
