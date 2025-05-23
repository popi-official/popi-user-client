import { GetPopUpDetailResponse } from '@/types/api/ApiResponseType';

export const PopUpDetailMock: GetPopUpDetailResponse = {
  popupId: 8,
  popupName: '블랙핑크 팝업',
  imageUrl:
    'https://listly-spongebob.s3.amazonaws.com/media/images/directory-naver-maps-2.width-1200.png',
  popupOpenDate: '2025-05-01',
  popupCloseDate: '2025-06-09',
  reservationOpenDateTime: '2025-07-27 10:00:00',
  reservationCloseDateTime: '2025-08-28 20:00:00',
  address: '서울특별시 영등포구 여의대로 108 3층',
  runOpenTime: '10:00:00',
  runCloseTime: '20:00:00',
  latitude: 37.123456,
  longitude: 127.123456,
};
