import { postNotificationApi } from '@/apis/notification/NotificationApi';
import { PostNotificationRequest } from '@/types/api/ApiRequestType';
import { useMutation } from '@tanstack/react-query';

export const useNotificationApi = () => {
  const mutation = useMutation({
    mutationFn: ({ fcmToken }: PostNotificationRequest) => postNotificationApi({ fcmToken }),
  });
  return { mutation };
};
