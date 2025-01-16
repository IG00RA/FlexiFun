'use client';

import { useEffect } from 'react';
import styles from './LanguageSwitcher.module.css';
import { usePathname, useRouter } from 'next/navigation';
import useLanguageStore from '@/store/useLanguageStore';

const LanguageSwitcher = ({ lang }: { lang: string }) => {
  const pathname = usePathname();
  const router = useRouter();

  const { query, setQuery, setLocale } = useLanguageStore();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const urlSearchParams = new URLSearchParams(window.location.search);
      const queryString = urlSearchParams.toString();
      setQuery(queryString ? `?${queryString}` : '');
    }
  }, [setQuery]);

  useEffect(() => {
    setLocale(lang);
  }, [lang]);

  const handleLanguageChange = (lang: string) => {
    const path = pathname.split('/').slice(2).join('/');
    router.push(`/${lang}/${path}${query}`);
  };

  return (
    <div className={styles.language}>
      <button
        className={`${styles.button} ${
          lang === 'sk' ? styles.buttonActive : styles.buttonUnActive
        }`}
        onClick={() => handleLanguageChange('sk')}
        type="button"
      >
        SK
      </button>
      <button
        className={`${styles.button} ${
          lang === 'uk' ? styles.buttonActive : styles.buttonUnActive
        }`}
        onClick={() => handleLanguageChange('uk')}
        type="button"
      >
        UA
      </button>
    </div>
  );
};

export default LanguageSwitcher;
