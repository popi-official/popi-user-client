import { Theme } from '@/theme/Theme';
import React from 'react';
import { Text } from 'react-native';
import { ThemeProvider } from 'styled-components';

type Props = {
  children: React.ReactNode;
};

export default function CustomThemeProvider({ children }: Props) {
  return (
    <ThemeProvider theme={Theme}>
      {typeof children === 'string' ? <Text>{children}</Text> : children}
    </ThemeProvider>
  );
}
