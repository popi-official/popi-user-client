import { GetPopUpMarkerItemsResponse } from '@/types/api/ApiResponseType';

const Images = {
  popUp01: require('@/assets/images/home/popUp01.webp'),
  popUp02: require('@/assets/images/home/popUp02.webp'),
  popUp03: require('@/assets/images/home/popUp03.webp'),
};

export const popUpMarkerItems: GetPopUpMarkerItemsResponse = [
  {
    popupName: '블랙핑크 팝업',
    imageUrl: Images.popUp01,
    popupOpenDate: '2025-05-01',
    popupCloseDate: '2025-06-09',
    address: '서울특별시 영등포구 여의대로 108 3층',
    latitude: 37.123456,
    longitude: 127.123456,
  },
  {
    popupName: '빅뱅 팝업',
    imageUrl: Images.popUp02,
    popupOpenDate: '2025-05-01',
    popupCloseDate: '2025-06-09',
    address: '서울특별시 영등포구 여의대로 108 3층',
    latitude: 37.124456,
    longitude: 127.124456,
  },
  {
    popupName: '아이브 팝업',
    imageUrl: Images.popUp03,
    popupOpenDate: '2025-05-01',
    popupCloseDate: '2025-06-09',
    address: '서울특별시 영등포구 여의대로 108 3층',
    latitude: 37.124256,
    longitude: 127.124956,
  },
];
