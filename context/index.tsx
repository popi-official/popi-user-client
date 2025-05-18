import React from 'react';
import CustomReactQueryProvider from './CustomReactQueryProvider';
import CustomThemeProvider from './CustomThemeProvider';
import { SafeAreaProvider } from 'react-native-safe-area-context';

type Props = {
  children: React.ReactNode;
};

export default function RootContext({ children }: Props) {
  return (
    <CustomReactQueryProvider>
      <SafeAreaProvider>
        <CustomThemeProvider>{children}</CustomThemeProvider>
      </SafeAreaProvider>
    </CustomReactQueryProvider>
  );
}
