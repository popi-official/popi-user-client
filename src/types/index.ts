import { ThemeProps } from 'styled-components/native';
import { DefaultTheme } from 'styled-components/native';

export type ThemeProps = {
  theme: DefaultTheme;
};

type ThemeSpacingKey = keyof DefaultTheme['spacing'];
type ThemeColorKey = keyof DefaultTheme['colors'];
type ThemeFontSizeKey = keyof DefaultTheme['typography']['fontSizes'];
type ThemeFontWeightKey = keyof DefaultTheme['typography']['fontWeights'];
type ThemeRadiusKey = keyof DefaultTheme['radius'];
type ThemeFontKey = keyof DefaultTheme['typography']['fonts'];
type ThemeGradient = keyof DefaultTheme['gradients'];

export const getThemeSpacing =
  <K extends ThemeSpacingKey>(key: K) =>
  ({ theme }: ThemeProps) =>
    `${theme.spacing[key]}px`;

export const getThemeColor =
  <K extends ThemeColorKey>(key: K) =>
  ({ theme }: ThemeProps) =>
    `${theme.colors[key]}`;

export const getThemeFontSize =
  <K extends ThemeFontSizeKey>(key: K) =>
  ({ theme }: ThemeProps) =>
    `${theme.typography.fontSizes[key]}px`;

export const getThemeFontWeight =
  <K extends ThemeFontWeightKey>(key: K) =>
  ({ theme }: ThemeProps) =>
    theme.typography.fontWeights[key];

export const getThemeRadius =
  <K extends ThemeRadiusKey>(key: K) =>
  ({ theme }: ThemeProps) =>
    `${theme.radius[key]}px`;

export const getThemeFont =
  <K extends ThemeFontKey>(key: K) =>
  ({ theme }: ThemeProps) =>
    `${theme.typography.fonts[key]}`;

export const getThemeGradient =
  <K extends ThemeGradient>(key: K) =>
  ({ theme }: ThemeProps<DefaultTheme>) =>
    theme.gradients[key];
