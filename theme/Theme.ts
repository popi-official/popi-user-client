import { DefaultTheme } from "styled-components/native";

export const Theme: DefaultTheme = {
  colors: {
    primary: "#007AFF",
    secondary: "#5AC8FA",
    background: "#FFFFFF",
    text: "#000000",
    textSecondary: "#8E8E93",
    border: "#CECED2",
    error: "#FF3B30",
    success: "#34C759",
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
      regular: "400",
      medium: "500",
      bold: "700",
    },
  },
  radius: {
    small: 4,
    medium: 8,
    large: 16,
    round: 9999,
  },
};
