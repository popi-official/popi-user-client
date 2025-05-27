export type CartItem = {
  itemId: number;
  title: string;
  imagePath: string;
  price: number;
  quantity: number;
  selected: boolean;
};

export type CartState = {
  cartItems: CartItem[];
};

export type CartActions = {
  addToCart: (item: Omit<CartItem, 'quantity' | 'selected'>) => void;
  changeQuantity: (itemId: number, delta: number) => void;
  toggleSelect: (itemId: number) => void;
  toggleSelectAll: () => void;
  deleteItem: (itemId: number) => void;
  clearCart: () => void;
};
