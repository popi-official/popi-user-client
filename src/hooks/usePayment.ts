import { PostPaymentReadyRequest } from '@/types/api/ApiRequestType';
import { usePaymentApi } from './api/usePaymantApi';

export const usePayment = () => {
  const { postPaymentReadyMutation, postPaymentVerifyMutation } = usePaymentApi();

  const startPayment = async ({ popupId, items }: PostPaymentReadyRequest) => {
    const response = await postPaymentReadyMutation.mutateAsync({ popupId, items });
    response.data.
  };
};
