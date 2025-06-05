import { getMyPayments, postPaymentReady, postPaymentVerify } from '@/apis/payment/PaymentApi';
import { PostPaymentReadyRequest, PostPaymentVerifyRequest } from '@/types/api/ApiRequestType';
import { useInfiniteQuery, useMutation } from '@tanstack/react-query';

export const usePaymentApi = () => {
  const postPaymentReadyMutation = useMutation({
    mutationFn: (request: PostPaymentReadyRequest) => postPaymentReady(request),
  });

  const postPaymentVerifyMutation = useMutation({
    mutationFn: (request: PostPaymentVerifyRequest) => postPaymentVerify(request),
  });

  return { postPaymentReadyMutation, postPaymentVerifyMutation };
};

export const useGetMyPaymentsApi = () => {
  return useInfiniteQuery({
    queryKey: ['myPayments'],
    queryFn: ({ pageParam }) => getMyPayments(pageParam),
    getNextPageParam: response => {
      const lastPage = response.data;
      const last = lastPage.content[lastPage.content.length - 1];

      if (lastPage.isLast) {
        return undefined;
      }

      return last.paymentId;
    },
    initialPageParam: undefined as number | undefined,
  });
};
