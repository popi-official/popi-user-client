import { BannerItemType } from '@/types/HomeScreenType';

export const OnBoardingData = [
  {
    backgroundImg: require('@/assets/images/onBoarding/onBoarding-background-1.png'),
    contentImg: require('@/assets/images/onBoarding/onBoarding-1.png'),
    text: '인기있는 팝업과 굿즈를 찾아보아요',
  },
  {
    backgroundImg: require('@/assets/images/onBoarding/onBoarding-background-2.png'),
    contentImg: require('@/assets/images/onBoarding/onBoarding-2.png'),
    text: '팝업을 예약해 발급받은 QR로 입장해요',
  },
  {
    backgroundImg: require('@/assets/images/onBoarding/onBoarding-background-3.png'),
    contentImg: require('@/assets/images/onBoarding/onBoarding-3.png'),
    text: 'QR을 찍어 장바구니에 담아\n 기다림 없이 편리하게 앱으로 결제해요',
  },
];

const Images = {
  popUp01: require('@/assets/images/home/popUp01.webp'),
  popUp02: require('@/assets/images/home/popUp02.webp'),
  popUp03: require('@/assets/images/home/popUp03.webp'),
  popUp04: require('@/assets/images/home/popUp04.webp'),
};

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
