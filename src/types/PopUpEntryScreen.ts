export type ReservationDetailType = {
  popupName: string;
  popupDate: string;
  popupDay: string;
  popupTime: string;
  address: string;
  qrCodeBase64: string;
};

export type RecommendedItemType = {
  itemId: number;
  title: string;
  imagePath: number; // 추후 string으로 변경
  price: number;
};

export type PopularItemType = {
  itemId: number;
  title: string;
  imagePath: number; // 추후 string으로 변경
  price: number;
};
