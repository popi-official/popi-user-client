import { BannerItemType } from '@/types/HomeScreenType';

const Images = {
  popUp01: require('@/assets/images/home/popUp01.webp'),
  popUp02: require('@/assets/images/home/popUp02.webp'),
  popUp03: require('@/assets/images/home/popUp03.webp'),
  popUp04: require('@/assets/images/home/popUp04.webp'),
};

// bannerItems는 프론트에서 임의로 지정
export const bannerItems: BannerItemType[] = [
  {
    image: Images.popUp01,
    title: 'MEOVV',
    subTitle: 'DEBUT PRE-LISTENING POP-UP',
  },
  {
    image: Images.popUp02,
    title: 'THE HOT HOUSE',
    subTitle: 'LE SSERAFIM 2025 S/S POP UP',
  },
  {
    image: Images.popUp03,
    title: 'Season of Memories',
    subTitle: 'GFRIEND SPECIAL ALBUM POP-UP',
  },
  {
    image: Images.popUp04,
    title: 'DREAMSCAPE',
    subTitle: 'NCT DREAM x LINE FRIENDS',
  },
];
