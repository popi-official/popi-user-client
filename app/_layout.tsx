import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';
import 'react-native-gesture-handler';
import { useFonts } from 'expo-font';
import RootContext from '@/context';

export { ErrorBoundary } from 'expo-router';

export const unstable_settings = {
  initialRouteName: '(tabs)',
};

SplashScreen.preventAutoHideAsync();
export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    'Pretendard-Black': require('@/assets/fonts/Pretendard-Black.otf'),
    'Pretendard-ExtraLight': require('@/assets/fonts/Pretendard-ExtraLight.otf'),
    'Pretendard-Light': require('@/assets/fonts/Pretendard-Light.otf'),
    'Pretendard-Medium': require('@/assets/fonts/Pretendard-Medium.otf'),
    'Pretendard-Regular': require('@/assets/fonts/Pretendard-Regular.otf'),
    'Pretendard-SemiBold': require('@/assets/fonts/Pretendard-SemiBold.otf'),
    'Pretendard-Bold': require('@/assets/fonts/Pretendard-Bold.otf'),
    'Pretendard-ExtraBold': require('@/assets/fonts/Pretendard-ExtraBold.otf'),
    'Pretendard-Thin': require('@/assets/fonts/Pretendard-Thin.otf'),
    'Inter-Black': require('@/assets/fonts/Inter-Black.ttf'),
    'Inter-BlackItalic': require('@/assets/fonts/Inter-BlackItalic.ttf'),
    'Inter-Bold': require('@/assets/fonts/Inter-Bold.ttf'),
    'Inter-BoldItalic': require('@/assets/fonts/Inter-BoldItalic.ttf'),
    'Inter-ExtraBold': require('@/assets/fonts/Inter-ExtraBold.ttf'),
    'Inter-ExtraBoldItalic': require('@/assets/fonts/Inter-ExtraBoldItalic.ttf'),
    'Inter-ExtraLight': require('@/assets/fonts/Inter-ExtraLight.ttf'),
    'Inter-ExtraLightItalic': require('@/assets/fonts/Inter-ExtraLightItalic.ttf'),
    'Inter-Italic': require('@/assets/fonts/Inter-Italic.ttf'),
    'Inter-Light': require('@/assets/fonts/Inter-Light.ttf'),
    'Inter-LightItalic': require('@/assets/fonts/Inter-LightItalic.ttf'),
    'Inter-Medium': require('@/assets/fonts/Inter-Medium.ttf'),
    'Inter-MediumItalic': require('@/assets/fonts/Inter-MediumItalic.ttf'),
    'Inter-Regular': require('@/assets/fonts/Inter-Regular.ttf'),
    'Inter-SemiBold': require('@/assets/fonts/Inter-SemiBold.ttf'),
    'Inter-SemiBoldItalic': require('@/assets/fonts/Inter-SemiBoldItalic.ttf'),
    'Inter-Thin': require('@/assets/fonts/Inter-Thin.ttf'),
    'Inter-ThinItalic': require('@/assets/fonts/Inter-ThinItalic.ttf'),
  });

  useEffect(() => {
    const hideSplash = async () => {
      if (fontsLoaded) {
        await new Promise(resolve => setTimeout(resolve, 3000));
        await SplashScreen.hideAsync();
      }
    };

    hideSplash();
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <RootContext>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="(common)" options={{ headerShown: false }} />
      </Stack>
    </RootContext>
  );
}
