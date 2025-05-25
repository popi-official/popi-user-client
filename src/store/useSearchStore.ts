import { create } from 'zustand';

export type SearchFlagType = 'POPUP' | 'ITEM';

type SearchStore = {
  keyword: string;
  page: number;
  flag: SearchFlagType | null;
  searchMode: boolean;
  updateField: (field: Partial<SearchStore>) => void;
  clearSearch: () => void;
};

const initialState = {
  keyword: '',
  page: 1,
  flag: null,
  searchMode: false,
};

export const useSearchStore = create<SearchStore>()(set => ({
  keyword: '',
  page: 1,
  flag: null,
  searchMode: false,
  updateField: (field: Partial<SearchStore>) =>
    set(state => ({
      ...state,
      ...field,
    })),
  clearSearch: () => set(prev => ({ ...initialState, flag: prev.flag })),
}));
