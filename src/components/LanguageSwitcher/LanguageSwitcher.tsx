'use client';

import { useEffect, useState } from 'react';
import styles from './LanguageSwitcher.module.css';
import { usePathname, useRouter } from 'next/navigation';
import useLanguageStore from '@/store/useLanguageStore';

const LanguageSwitcher = ({ lang }: { lang: string }) => {
  const pathname = usePathname();
  const router = useRouter();

  const { query, setQuery, setLocale } = useLanguageStore();
  const [hoveredButton, setHoveredButton] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const urlSearchParams = new URLSearchParams(window.location.search);
      const queryString = urlSearchParams.toString();
      setQuery(queryString ? `?${queryString}` : '');
    }
  }, [setQuery]);

  useEffect(() => {
    setLocale(lang);
  }, [setLocale, lang]);

  const handleLanguageChange = (lang: string) => {
    const path = pathname?.split('/').slice(2).join('/');
    router.push(`/${lang}/${path}${query}`);
  };

  // Обробники подій для ховера
  const handleMouseEnter = (locale: string) => {
    if (lang !== locale) {
      setHoveredButton(locale); // Встановлюємо кнопку, на яку наведено курсор
    }
  };

  const handleMouseLeave = () => {
    setHoveredButton(null); // Скидаємо стан ховера
  };

  const getButtonClass = (locale: string) => {
    let className = styles.button;
    if (lang === locale) {
      className += ` ${styles.buttonActive}`;
      if (hoveredButton && hoveredButton !== locale) {
        className += ` ${styles.buttonActiveHover}`;
      }
    } else {
      className += ` ${styles.buttonUnActive}`;
      if (hoveredButton === locale) {
        className += ` ${styles.buttonUnActiveHover}`;
      }
    }
    return className;
  };

  return (
    <div className={styles.language}>
      <button
        className={getButtonClass('sk')}
        onClick={() => handleLanguageChange('sk')}
        onMouseEnter={() => handleMouseEnter('sk')}
        onMouseLeave={handleMouseLeave}
        type="button"
      >
        SK
      </button>
      <button
        className={getButtonClass('uk')}
        onClick={() => handleLanguageChange('uk')}
        onMouseEnter={() => handleMouseEnter('uk')}
        onMouseLeave={handleMouseLeave}
        type="button"
      >
        UA
      </button>
    </div>
  );
};

export default LanguageSwitcher;
