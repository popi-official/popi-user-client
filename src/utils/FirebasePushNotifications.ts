import { getApp } from '@react-native-firebase/app';
import {
  getMessaging,
  requestPermission,
  getToken,
  onMessage,
  onNotificationOpenedApp,
  getInitialNotification,
  FirebaseMessagingTypes,
  AuthorizationStatus,
} from '@react-native-firebase/messaging';
import { router } from 'expo-router';
import { Platform, PermissionsAndroid } from 'react-native';

/**
 * 앱 초기화 시 푸시 알림 설정 (토큰만 반환, 서버 전송은 별도)
 */
export const initializePushNotifications = async (): Promise<string | null> => {
  try {
    const app = getApp();
    const messaging = getMessaging(app);

    const currentAuthStatus = await messaging.hasPermission();
    let authStatus = currentAuthStatus;

    if (
      currentAuthStatus === AuthorizationStatus.NOT_DETERMINED ||
      currentAuthStatus === AuthorizationStatus.DENIED
    ) {
      authStatus = await requestPermissions();
    }

    if (authStatus !== AuthorizationStatus.AUTHORIZED) {
      console.warn('푸시 알림 권한이 거부되었습니다.');
      return null;
    }

    const fcmToken = await getFCMToken();
    return fcmToken;
  } catch (error) {
    console.error('푸시 알림 초기화 실패:', error);
    return null;
  }
};

/**
 * 푸시 알림 권한 요청
 */
export const requestPermissions = async (): Promise<FirebaseMessagingTypes.AuthorizationStatus> => {
  try {
    const app = getApp();
    const messaging = getMessaging(app);

    if (Platform.OS === 'android' && Platform.Version >= 33) {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS,
      );
      if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
        return AuthorizationStatus.DENIED;
      }
    }

    const authStatus = await requestPermission(messaging);
    return authStatus;
  } catch (error) {
    console.error('권한 요청 실패:', error);
    return AuthorizationStatus.DENIED;
  }
};

/**
 * FCM 토큰 발급
 */
export const getFCMToken = async (): Promise<string | null> => {
  try {
    const app = getApp();
    const messaging = getMessaging(app);
    const fcmToken = await getToken(messaging);
    return fcmToken;
  } catch (error) {
    console.error('FCM 토큰 발급 실패:', error);
    return null;
  }
};

/**
 * 알림 클릭 리스너 설정 + 토큰 갱신 시 콜백
 */
export const setupNotificationListeners = (): void => {
  const app = getApp();
  const messaging = getMessaging(app);

  // 포그라운드에서 알림 수신 - 아무것도 안 함 (시스템이 알아서 푸시 알림 표시)
  onMessage(messaging, async (_remoteMessage: FirebaseMessagingTypes.RemoteMessage) => {
    // 아무것도 안 함 - 시스템이 알아서 알림 표시
  });

  // 백그라운드에서 알림 클릭으로 앱 열린 경우
  onNotificationOpenedApp(messaging, (_remoteMessage: FirebaseMessagingTypes.RemoteMessage) => {
    router.push('/(tabs)/my');
  });

  // 앱 종료 상태에서 알림 클릭으로 열린 경우
  getInitialNotification(messaging).then(
    (remoteMessage: FirebaseMessagingTypes.RemoteMessage | null) => {
      if (remoteMessage) {
        router.push('/(tabs)/my');
      }
    },
  );
};
