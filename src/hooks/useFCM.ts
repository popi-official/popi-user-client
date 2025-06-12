import { useEffect, useCallback } from 'react';
import { useNotificationApi } from '@/hooks/api/useNotificationApi';
import {
  initializePushNotifications,
  setupNotificationListeners,
} from '@/utils/FirebasePushNotifications';

export const useFirebasePushNotification = () => {
  const { mutation } = useNotificationApi();

  const sendTokenToServer = useCallback(
    (fcmToken: string) => {
      mutation.mutate({ fcmToken });
    },
    [mutation],
  );

  const initializePush = useCallback(async () => {
    try {
      const fcmToken = await initializePushNotifications();

      if (fcmToken) {
        sendTokenToServer(fcmToken);
      }
    } catch (error) {
      console.error('푸시 알림 초기화 실패:', error);
    }
  }, [sendTokenToServer]);

  useEffect(() => {
    setupNotificationListeners();
  }, [sendTokenToServer]);

  return {
    initializePush,
    isLoading: mutation.isPending,
    error: mutation.error,
  };
};
