import { GlobalResponse, PostPopUpSearchResponse } from '@/types/api/ApiResponseType';

const images = {
  imageUrl: require('@/assets/images/home/popUp01.webp'),
};

export const PopUpSearchResultMocks: GlobalResponse<PostPopUpSearchResponse> = {
  success: true,
  status: 200,
  data: {
    content: [
      {
        popupId: 1,
        popupName: 'a',
        imageUrl: images.imageUrl,
        popupOpenDate: '2025-05-01',
        popupCloseDate: '2025-06-09',
        address: '서울특별시 영등포구 여의대로 108 3층',
      },
      {
        popupId: 2,
        popupName: 'bc',
        imageUrl: images.imageUrl,
        popupOpenDate: '2025-05-01',
        popupCloseDate: '2025-06-09',
        address: '서울특별시 관악구 신림동 108 3층',
      },
    ],
    isLast: false,
  },
  timestamp: new Date().toISOString(),
};
