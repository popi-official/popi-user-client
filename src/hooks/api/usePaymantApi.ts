import { postPaymentReady, postPaymentVerify } from '@/apis/payment/PaymentApi';
import { PostPaymentReadyRequest, PostPaymentVerifyRequest } from '@/types/api/ApiRequestType';
import { useMutation } from '@tanstack/react-query';

export const usePaymentApi = () => {
  const postPaymentReadyMutation = useMutation({
    mutationFn: (request: PostPaymentReadyRequest) => postPaymentReady(request),
  });

  const postPaymentVerifyMutation = useMutation({
    mutationFn: (request: PostPaymentVerifyRequest) => postPaymentVerify(request),
  });

  return { postPaymentReadyMutation, postPaymentVerifyMutation };
};
