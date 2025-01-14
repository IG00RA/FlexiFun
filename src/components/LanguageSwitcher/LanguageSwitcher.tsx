'use client';

import { useEffect } from 'react';
import styles from './LanguageSwitcher.module.css';
import { usePathname, useRouter } from 'next/navigation';
import useLanguageStore from '@/store/useLanguageStore';

const LanguageSwitcher: React.FC = () => {
  const pathname = usePathname();
  const router = useRouter();

  const { query, setQuery, locale, setLocale, isLang, setIsLang } =
    useLanguageStore();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const urlSearchParams = new URLSearchParams(window.location.search);
      const queryString = urlSearchParams.toString();
      setQuery(queryString ? `?${queryString}` : '');
    }
  }, [setQuery]);

  useEffect(() => {
    const localeFromPath = getLocaleFromPath(pathname || '');
    setLocale(localeFromPath);
  }, [pathname, setLocale]);

  useEffect(() => {
    if (locale === 'sk') {
      setIsLang(true);
    } else {
      setIsLang(false);
    }
  }, [locale]);

  const handleLanguageChange = (lang: string) => {
    const path = pathname.split('/').slice(2).join('/');
    router.push(`/${lang}/${path}${query}`);
    setLocale(lang);
  };

  const getLocaleFromPath = (pathname: string): string => {
    const pathSegments = pathname.split('/');
    return pathSegments[1];
  };

  return (
    <div className={styles.language}>
      <button
        className={`${styles.button} ${locale === 'sk' && styles.buttonActive}`}
        onClick={() => handleLanguageChange('sk')}
        type="button"
      >
        SK
      </button>
      <span>/</span>
      <button
        className={`${styles.button} ${locale === 'uk' && styles.buttonActive}`}
        onClick={() => handleLanguageChange('uk')}
        type="button"
      >
        UA
      </button>
    </div>
  );
};

export default LanguageSwitcher;
