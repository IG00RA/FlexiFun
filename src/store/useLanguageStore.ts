import { create } from 'zustand';

interface LanguageState {
  confirm: boolean;
  setConfirm: (confirm: boolean) => void;
  query: string;
  setQuery: (query: string) => void;
  locale: string;
  setLocale: (locale: string) => void;
}

const useLanguageStore = create<LanguageState>(set => ({
  confirm: false,
  setConfirm: confirm => set({ confirm }),
  query: '',
  setQuery: query => set({ query }),
  locale: '',
  setLocale: locale => set({ locale }),
}));

export default useLanguageStore;
