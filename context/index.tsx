import React from 'react';
import CustomReactQueryProvider from './CustomReactQueryProvider';
import CustomThemeProvider from './CustomThemeProvider';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

type Props = {
  children: React.ReactNode;
};

export default function RootContext({ children }: Props) {
  return (
    <CustomReactQueryProvider>
      <GestureHandlerRootView>
        <SafeAreaProvider>
          <CustomThemeProvider>{children}</CustomThemeProvider>
        </SafeAreaProvider>
      </GestureHandlerRootView>
    </CustomReactQueryProvider>
  );
}
