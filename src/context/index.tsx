import {SafeAreaProvider} from 'react-native-safe-area-context';
import CustomNavigationProvider from './CustomNavigationProvider';
import CustomQueryProvider from './CustomQueryProvider';
import CustomPaperProvider from './CustomPaperProvider';
import StyledComponentProvider from './StyledComponentProvider';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {BottomSheetModalProvider} from '@gorhom/bottom-sheet';

export default function RootProvider({children}: {children: React.ReactNode}) {
  return (
    <SafeAreaProvider>
      <GestureHandlerRootView>
        <CustomNavigationProvider>
          <StyledComponentProvider>
            <CustomPaperProvider>
              <CustomQueryProvider>
                <BottomSheetModalProvider>{children}</BottomSheetModalProvider>
              </CustomQueryProvider>
            </CustomPaperProvider>
          </StyledComponentProvider>
        </CustomNavigationProvider>
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
}
