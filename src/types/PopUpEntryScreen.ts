export type RecommendedItem = {
  itemId: number;
  title: string;
  imagePath: number; // 추후 string으로 변경
  price: number;
};

export type PopularItem = {
  itemId: number;
  title: string;
  imageUrl: string;
  price: number;
};
