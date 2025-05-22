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
    GmarketSansTTFMedium: require('@/assets/fonts/GmarketSansTTFMedium.ttf'),
    PretendardVariable: require('@/assets/fonts/PretendardVariable.ttf'),
    InterVariable: require('@/assets/fonts/InterVariable.ttf'),
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
