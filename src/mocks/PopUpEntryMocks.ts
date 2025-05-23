import {
  PopularItemType,
  RecommendedItemType,
  ReservationDetailType,
} from '@/types/PopUpEntryScreen';

const Images = {
  item: require('@/assets/images/popUpEntry/item.webp'),
};

export const reservationDetail: ReservationDetailType = {
  popupName: '블랙핑크 팝업스토어',
  popupDate: '2025-05-26',
  popupDay: 'MON',
  popupTime: '10:00',
  address: '서울특별시 영등포구 여의대로 108, 3층',
  qrCodeBase64:
    'iVBORw0KGgoAAAANSUhEUgAAAPoAAAD6AQAAAACgl2eQAAABdUlEQVR4Xu2XTaoEIRCDCzyAR/LqHskDCL4kZQ/TLmb9AoamccqvF6F+dGL9Vo8zcugCqQukLpC6QOr/ADOoNRoCs/bAA1U3gOs+o0W0MgLME/QCaG2NKAjUhTWMmwKwCaAMvn2BzBfWtgCXU5WW5BO0AtT+AD7P2f4OwEfafUWMANqUNSwwkNlBbB8zACrEGuG6MI2Rqe+SswDmHr8tzS6eKftDLwA2Cw8UrHGyMFOvbFoAaU2Vhl02/thZdAKq6o0M06SS23PACCAjpwwwjnfPuBOgTpE1PotH5KvkPACd7GUPYcJL57sXIHcsPJKhq69qzw5YmmCot2AH0Sw3zAAVGCcws0az75IzAXpe1xGc/EvIIaY54ASkWHUayMEF314Af/KuyF12TaXl/MoJUOMv5qtpIMuvH7CtaQ40ZaofNWkEaC3XKjxPAJniNNbPc4g5AFwCyK7hrm7vZsDT/gzq9l6OK4oD8EMXSF0gdYHUBVIewB+eKbgofoNSbQAAAABJRU5ErkJggg==',
};

export const recommendedItemList: RecommendedItemType[] = [
  {
    itemId: 1,
    title: 'DAZED A형 (리사)ㅇㅇㅇㅇ',
    imagePath: Images.item,
    price: 8000,
  },
  {
    itemId: 2,
    title: 'KRUNK ORANGE',
    imagePath: Images.item,
    price: 20000,
  },
  {
    itemId: 3,
    title: 'POSTER SET',
    imagePath: Images.item,
    price: 9000,
  },
];

export const popularItemList: PopularItemType[] = [
  {
    itemId: 1,
    title: 'DAZED A형 (리사)',
    imagePath: Images.item,
    price: 8000,
  },
  {
    itemId: 2,
    title: 'KRUNK ORANGE',
    imagePath: Images.item,
    price: 20000,
  },
  {
    itemId: 3,
    title: 'POSTER SET',
    imagePath: Images.item,
    price: 9000,
  },
];
