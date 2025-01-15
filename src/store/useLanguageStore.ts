import { create } from 'zustand';

interface LanguageState {
  query: string;
  setQuery: (query: string) => void;
  locale: string;
  setLocale: (locale: string) => void;
}

const useLanguageStore = create<LanguageState>(set => ({
  query: '',
  setQuery: query => set({ query }),
  locale: '',
  setLocale: locale => set({ locale }),
}));

export default useLanguageStore;
