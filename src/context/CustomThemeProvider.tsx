import { Theme } from '@/theme/Theme';
import React from 'react';
import { ThemeProvider } from 'styled-components';

type Props = {
  children: React.ReactNode;
};

export default function CustomThemeProvider({ children }: Props) {
  return <ThemeProvider theme={Theme}>{children}</ThemeProvider>;
}
