import { PopularItemType, RecommendedItemType } from '@/types/PopUpEntryScreen';

const Images = {
  item: require('@/assets/images/popUpEntry/item.webp'),
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
