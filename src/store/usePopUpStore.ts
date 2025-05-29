import { create } from 'zustand';

type StoreType = {
  selectedPopUpId: number;
  setSelectedPopUpId: (popUpId: number) => void;
};

export const usePopUpStore = create<StoreType>()(set => ({
  selectedPopUpId: 0,
  setSelectedPopUpId: (popUpId: number) => set(prev => ({ ...prev, selectedPopUpId: popUpId })),
}));
