import 'styled-components/native';

export type GradientType = {
  colors: string[];
  start: { x: number; y: number };
  end: { x: number; y: number };
};

declare module '*.png';
declare module '*.svg';
declare module '*.jpeg';
declare module '*.jpg';
declare module '*.webp';

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
      gray11: string;
    };
    gradients: {
      button: GradientType;
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
        pretendard: {
          thin: string;
          extralight: string;
          light: string;
          regular: string;
          medium: string;
          semibold: string;
          bold: string;
          black: string;
          extrabold: string;
        };
        inter: {
          variable: string;
          thin: string;
          thinItalic: string;
          extralight: string;
          extralightItalic: string;
          light: string;
          lightItalic: string;
          regular: string;
          italic: string;
          medium: string;
          mediumItalic: string;
          semibold: string;
          semiboldItalic: string;
          bold: string;
          boldItalic: string;
          extrabold: string;
          extraboldItalic: string;
          black: string;
          blackItalic: string;
        };
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
