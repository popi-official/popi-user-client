import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect, useState } from 'react';
import 'react-native-reanimated';
import 'react-native-gesture-handler';
import { useFonts } from 'expo-font';
import { Asset } from 'expo-asset';
import RootContext from '@/context';
import { LocaleConfig } from 'react-native-calendars';
import { initializeKakaoSDK } from '@react-native-kakao/core';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

export { ErrorBoundary } from 'expo-router';

export const unstable_settings = {
  initialRouteName: '(tabs)',
};

// 이미지 캐싱 함수
const cacheImages = async () => {
  const images = [require('@/assets/images/common/indicator.webp')];

  try {
    const cachePromises = images.map(image => {
      const asset = Asset.fromModule(image);
      return asset.downloadAsync();
    });

    await Promise.all(cachePromises);
    return true;
  } catch (error) {
    console.error('이미지 캐싱 실패:', error);
    return false; // 실패해도 앱은 계속 실행
  }
};

LocaleConfig.locales.kr = {
  monthNames: [
    '01월',
    '02월',
    '03월',
    '04월',
    '05월',
    '06월',
    '07월',
    '08월',
    '09월',
    '10월',
    '11월',
    '12월',
  ],
  monthNamesShort: [
    '01월',
    '02월',
    '03월',
    '04월',
    '05월',
    '06월',
    '07월',
    '08월',
    '09월',
    '10월',
    '11월',
    '12월',
  ],
  dayNames: ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'],
  dayNamesShort: ['일', '월', '화', '수', '목', '금', '토'],
};
LocaleConfig.defaultLocale = 'kr';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [imagesLoaded, setImagesLoaded] = useState(false);

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

  const kakaoNativeAppKey = process.env.EXPO_PUBLIC_KAKAO_NATIVE_KEY || '';
  const iosClientId = process.env.EXPO_PUBLIC_GOOGLE_IOS_CLIENT_ID || '';

  useEffect(() => {
    const loadImages = async () => {
      await cacheImages();
      setImagesLoaded(true);
    };

    loadImages();
  }, []);

  useEffect(() => {
    const hideSplash = async () => {
      if (fontsLoaded && imagesLoaded) {
        await new Promise(resolve => setTimeout(resolve, 1500));
        await SplashScreen.hideAsync();
      }
    };

    hideSplash();
  }, [fontsLoaded, imagesLoaded]);

  // 소셜 로그인 초기화
  useEffect(() => {
    initializeKakaoSDK(kakaoNativeAppKey);
    GoogleSignin.configure({
      iosClientId,
    });
  }, []);

  // 폰트와 이미지 로딩이 모두 완료될 때까지 대기
  if (!fontsLoaded || !imagesLoaded) {
    return null;
  }

  return (
    <RootContext>
      <Stack
        screenOptions={{
          gestureEnabled: false,
        }}
      >
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="(common)" options={{ headerShown: false }} />
      </Stack>
    </RootContext>
  );
}
