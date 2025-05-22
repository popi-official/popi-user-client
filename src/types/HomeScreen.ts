export type BannerItemType = {
  image: number;
  title: string;
  subTitle: string;
};

export type HotItemType = {
  popupId: number;
  popupName: string;
  imageUrl: number; // 추후 string으로 변경
  popupOpenDate: string;
  popupCloseDate: string;
  address: string;
};

export type PopUpItemType = {
  popupId: number;
  popupName: string;
  imageUrl: number; // 추후 string으로 변경
  popupOpenDate: string;
  popupCloseDate: string;
  address: string;
};
