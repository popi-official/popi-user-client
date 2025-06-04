import { GetMyPaymentsResponse } from "@/types/api/ApiResponseType";

export const myPayment: GetMyPaymentsResponse = {
    content: [
        {
          paymentId: 6,
          popupId: 3,
          paidAt: '2024-06-03T17:00:00',
          items: [
            {
              itemName: '포토카드 세트',
              quantity: 1,
              price: 10000,
            },
          ],
        },
        {
          paymentId: 5,
          popupId: 1,
          paidAt: '2024-06-02T12:00:00',
          items: [
            {
              itemName: '응원봉',
              quantity: 1,
              price: 25000,
            },
            {
              itemName: '포스터',
              quantity: 3,
              price: 27000,
            },
          ],
        },
        {
          paymentId: 4,
          popupId: 2,
          paidAt: '2024-05-31T14:00:00',
          items: [
            {
              itemName: 'DAZED 지수',
              quantity: 1,
              price: 14800,
            },
            {
              itemName: '포스터 세트',
              quantity: 2,
              price: 30000,
            },
          ],
        },
        {
          paymentId: 3,
          popupId: 6,
          paidAt: '2024-05-30T15:30:00',
          items: [
            {
              itemName: '크레용 파란색',
              quantity: 1,
              price: 12000,
            },
          ],
        },
      ],
      isLast: false,
    };