import { create } from 'zustand';

interface LanguageState {
  query: string;
  locale: string;
  isLang: boolean;
  setQuery: (query: string) => void;
  setLocale: (locale: string) => void;
  setIsLang: (isLang: boolean) => void;
}

const useLanguageStore = create<LanguageState>(set => ({
  query: '',
  locale: '',
  isLang: false,
  setQuery: query => set({ query }),
  setLocale: locale => set({ locale }),
  setIsLang: isLang => set({ isLang }),
}));

export default useLanguageStore;
