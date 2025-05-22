export type BannerItem = {
  image: number;
  title: string;
  subTitle: string;
};

export type HotItem = {
  popupId: number;
  popupName: string;
  imageUrl: number; // 추후 string으로 변경
  popupOpenDate: string;
  popupCloseDate: string;
  address: string;
};

export type popUpItem = {
  popupId: number;
  popupName: string;
  imageUrl: number; // 추후 string으로 변경
  popupOpenDate: string;
  popupCloseDate: string;
  address: string;
};
