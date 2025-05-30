export default {
  expo: {
    name: 'popi-user-client',
    slug: 'popi-user-client',
    version: '1.0.0',
    orientation: 'portrait',
    icon: './src/assets/images/icon.png',
    scheme: 'popiuserclient',
    userInterfaceStyle: 'automatic',
    newArchEnabled: true,
    splash: {
      image: './src/assets/images/splash-icon.png',
      resizeMode: 'contain',
      backgroundColor: '#ffffff',
    },
    ios: {
      supportsTablet: true,
      bundleIdentifier: 'com.chik2chik.popiuserclient',
      infoPlist: {
        ITSAppUsesNonExemptEncryption: false,
        NSCameraUsageDescription: '팝업스토어 사진 촬영을 위해 카메라 권한이 필요합니다.',
        GIDClientID: process.env.EXPO_PUBLIC_GOOGLE_IOS_CLIENT_ID,
        CFBundleURLTypes: [
          {
            CFBundleURLName: 'Default',
            CFBundleURLSchemes: ['popiuserclient'],
          },
          ...(process.env.EXPO_PUBLIC_KAKAO_NATIVE_KEY
            ? [
                {
                  CFBundleURLName: 'Kakao',
                  CFBundleURLSchemes: [`kakao${process.env.EXPO_PUBLIC_KAKAO_NATIVE_KEY}`],
                },
              ]
            : []),
          ...(process.env.EXPO_PUBLIC_GOOGLE_IOS_URL_SCHEME
            ? [
                {
                  CFBundleURLName: 'Google',
                  CFBundleURLSchemes: [process.env.EXPO_PUBLIC_GOOGLE_IOS_URL_SCHEME],
                },
              ]
            : []),
        ],
        LSApplicationQueriesSchemes: [
          'kftc-bankpay',
          'ispmobile',
          'itms-apps',
          'hdcardappcardansimclick',
          'smhyundaiansimclick',
          'shinhan-sr-ansimclick',
          'smshinhanansimclick',
          'kb-acp',
          'mpocket.online.ansimclick',
          'ansimclickscard',
          'ansimclickipcollect',
          'vguardstart',
          'samsungpay',
          'scardcertiapp',
          'lottesmartpay',
          'lotteappcard',
          'cloudpay',
          'nhappcardansimclick',
          'nonghyupcardansimclick',
          'citispay',
          'citicardappkr',
          'citimobileapp',
          'kakaotalk',
          'payco',
          'chaipayment',
          'kb-auth',
          'hyundaicardappcardid',
          'com.wooricard.wcard',
          'lmslpay',
          'lguthepay-xpay',
          'liivbank',
          'supertoss',
          'newsmartpib',
          'kakaokompassauth',
          'kakaolink',
        ],
        NSAppTransportSecurity: {
          NSAllowsArbitraryLoads: true,
          NSAllowsArbitraryLoadsInWebContent: true,
        },
      },
      splash: {
        image: './src/assets/images/splash-icon.png',
        resizeMode: 'contain',
        backgroundColor: '#ffffff',
      },
    },
    android: {
      adaptiveIcon: {
        foregroundImage: './src/assets/images/splash-icon.png',
        backgroundColor: '#ffffff',
      },
      edgeToEdgeEnabled: true,
      package: 'com.chik2chik.popiuserclient',
      permissions: ['CAMERA', 'RECORD_AUDIO', 'READ_EXTERNAL_STORAGE', 'WRITE_EXTERNAL_STORAGE'],
      intentFilters: [
        {
          action: 'VIEW',
          category: ['DEFAULT', 'BROWSABLE'],
          data: {
            scheme: 'popiuserclient',
          },
        },
      ],
    },
    web: {
      bundler: 'metro',
      output: 'static',
      favicon: './src/assets/images/favicon.png',
    },
    plugins: [
      'expo-router',
      'expo-web-browser',
      'expo-dev-client',
      ...(process.env.EXPO_PUBLIC_GOOGLE_IOS_URL_SCHEME
        ? [
            [
              '@react-native-google-signin/google-signin',
              {
                iosUrlScheme: process.env.EXPO_PUBLIC_GOOGLE_IOS_URL_SCHEME,
              },
            ],
          ]
        : []),
      ...(process.env.EXPO_PUBLIC_NAVER_MAP_KEY
        ? [
            [
              '@mj-studio/react-native-naver-map',
              {
                client_id: process.env.EXPO_PUBLIC_NAVER_MAP_KEY,
                android: {
                  ACCESS_FINE_LOCATION: true,
                  ACCESS_COARSE_LOCATION: true,
                  ACCESS_BACKGROUND_LOCATION: true,
                },
                ios: {
                  NSLocationAlwaysAndWhenInUseUsageDescription:
                    '지도를 위해 위치 정보를 사용합니다.',
                  NSLocationWhenInUseUsageDescription: '지도 기능을 위해 위치 정보가 필요합니다.',
                  NSLocationTemporaryUsageDescriptionDictionary: {
                    purposeKey: 'RouteNavigation',
                    usageDescription: '길찾기 기능을 위해 현재 위치를 사용합니다.',
                  },
                },
              },
            ],
          ]
        : []),
      [
        'expo-build-properties',
        {
          android: {
            extraMavenRepos: [
              'https://repository.map.naver.com/archive/maven',
              'https://devrepo.kakao.com/nexus/content/groups/public/',
            ],
          },
        },
      ],
      ...(process.env.EXPO_PUBLIC_KAKAO_NATIVE_KEY
        ? [
            [
              '@react-native-kakao/core',
              {
                nativeAppKey: process.env.EXPO_PUBLIC_KAKAO_NATIVE_KEY,
                android: {
                  authCodeHandlerActivity: true,
                  followChannelHandlerActivity: true,
                  forwardKakaoLinkIntentFilterToMainActivity: true,
                },
                ios: {
                  handleKakaoOpenUrl: true,
                  naviApplicationQuerySchemes: true,
                },
              },
            ],
          ]
        : []),
    ],
    experiments: {
      typedRoutes: true,
    },
    extra: {
      router: {},
      eas: {
        projectId: '49d33f71-3998-4fd9-a64d-8e992785c5e8',
      },
    },
  },
};
