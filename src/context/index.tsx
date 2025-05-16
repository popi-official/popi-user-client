import {SafeAreaProvider} from 'react-native-safe-area-context';
import CustomNavigationProvider from './CustomNavigationProvider';
import CustomQueryProvider from './CustomQueryProvider';
import CustomPaperProvider from './CustomPaperProvider';
import StyledComponentProvider from './StyledComponentProvider';

export default function RootProvider({children}: {children: React.ReactNode}) {
  return (
    <SafeAreaProvider>
      <CustomNavigationProvider>
        <StyledComponentProvider>
          <CustomPaperProvider>
            <CustomQueryProvider>{children}</CustomQueryProvider>
          </CustomPaperProvider>
        </StyledComponentProvider>
      </CustomNavigationProvider>
    </SafeAreaProvider>
  );
}
