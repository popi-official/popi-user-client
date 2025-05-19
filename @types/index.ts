import styled from 'styled-components/native';
import { DefaultTheme } from 'styled-components/native';

export type ThemeProps = {
  theme: DefaultTheme;
};

type StyledComponent =
  | ReturnType<typeof styled.View>
  | ReturnType<typeof styled.Text>
  | ReturnType<typeof styled.TouchableOpacity>
  | ReturnType<typeof styled.Image>
  | ReturnType<typeof styled.ScrollView>;

export type StyledComponents = {
  [key: string]: StyledComponent;
};

type ThemeSpacingKey = keyof DefaultTheme['spacing'];
type ThemeColorKey = keyof DefaultTheme['colors'];
type ThemeFontSizeKey = keyof DefaultTheme['typography']['fontSizes'];
type ThemeFontWeightKey = keyof DefaultTheme['typography']['fontWeights'];
type ThemeRadiusKey = keyof DefaultTheme['radius'];

export const getThemeSpacing =
  <K extends ThemeSpacingKey>(key: K) =>
  ({ theme }: ThemeProps) =>
    `${theme.spacing[key]}px`;

export const getThemeColor =
  <K extends ThemeColorKey>(key: K) =>
  ({ theme }: ThemeProps) =>
    `#${theme.colors[key]}`;

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
