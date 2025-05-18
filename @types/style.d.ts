import "styled-components/native";

declare module "styled-components/native" {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      background: string;
      text: string;
      textSecondary: string;
      border: string;
      error: string;
      success: string;
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
        bold: string;
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
