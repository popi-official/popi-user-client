import { CartActions, CartState } from '@/types/CartItemType';
import { create } from 'zustand';

export const useCartStore = create<
  CartState & { cartPopUpId: number; setCartPopUpId: (popUpId: number) => void } & CartActions
>(set => ({
  cartItems: [],
  cartPopUpId: 0,

  setCartPopUpId: (popUpId: number) => set(state => ({ ...state, cartPopUpId: popUpId })),

  addToCart: item =>
    set(state => {
      const exists = state.cartItems.find(i => i.itemId === item.itemId);
      if (exists) {
        return {
          cartItems: state.cartItems.map(i =>
            i.itemId === item.itemId ? { ...i, quantity: i.quantity + 1 } : i,
          ),
        };
      }
      return {
        cartItems: [...state.cartItems, { ...item, quantity: 1, selected: true }],
      };
    }),

  changeQuantity: (itemId, delta) =>
    set(state => ({
      cartItems: state.cartItems.map(item =>
        item.itemId === itemId ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item,
      ),
    })),

  toggleSelect: itemId =>
    set(state => ({
      cartItems: state.cartItems.map(item =>
        item.itemId === itemId ? { ...item, selected: !item.selected } : item,
      ),
    })),

  toggleSelectAll: () =>
    set(state => {
      const allSelected = state.cartItems.every(item => item.selected);
      return {
        cartItems: state.cartItems.map(item => ({
          ...item,
          selected: !allSelected,
        })),
      };
    }),

  deleteItem: itemId =>
    set(state => ({
      cartItems: state.cartItems.filter(item => item.itemId !== itemId),
    })),

  clearCart: () => set({ cartItems: [] }),
}));
