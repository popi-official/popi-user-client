import { GetPopUpMarkerItemsResponse } from '@/types/api/ApiResponseType';

const Images = {
  popUp01: require('@/assets/images/home/popUp01.webp'),
  popUp02: require('@/assets/images/home/popUp02.webp'),
  popUp03: require('@/assets/images/home/popUp03.webp'),
};

export const popUpMarkerItems: GetPopUpMarkerItemsResponse = [
  {
    popupId: 1,
    popupName: '블랙핑크 팝업',
    imageUrl: Images.popUp01,
    popupOpenDate: '2025-05-01',
    popupCloseDate: '2025-06-09',
    address: '서울특별시 영등포구 여의대로 108 3층',
    latitude: 37.544723,
    longitude: 127.056323,
  },
  {
    popupId: 2,
    popupName: '빅뱅 팝업',
    imageUrl: Images.popUp02,
    popupOpenDate: '2025-05-01',
    popupCloseDate: '2025-06-09',
    address: '서울특별시 영등포구 여의대로 108 3층',
    latitude: 37.544783,
    longitude: 127.056191,
  },
  {
    popupId: 3,
    popupName: '아이브 팝업',
    imageUrl: Images.popUp03,
    popupOpenDate: '2025-05-01',
    popupCloseDate: '2025-06-09',
    address: '서울특별시 영등포구 여의대로 108 3층',
    latitude: 37.544473,
    longitude: 127.055701,
  },
];
