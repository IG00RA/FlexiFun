'use client';

import Link from 'next/link';
import styles from './Header.module.css';
import Icon from '@/helpers/Icon';
import MobMenu from '../MobMenu/MobMenu';
import { useState } from 'react';
import { menuItems } from '@/data/data';
import Button from '../Button/Button';
import TSvgMedium from '@/helpers/TSvgMedium';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';
import { useTranslations } from 'next-intl';

interface HeaderProps {
  lang: string;
}

export default function Header({ lang }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const t = useTranslations();

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = 'auto';
    document.body.style.touchAction = 'auto';
  };
  const openMenu = () => {
    setIsMenuOpen(true);
    document.body.style.overflow = 'hidden';
    document.body.style.touchAction = 'none';
  };

  return (
    <header className={`${styles.header}`}>
      <Link className={styles.logoWrap} href={`/`}>
        <Icon name="icon-logoMob" width={116} height={35} />
      </Link>
      <Link className={styles.logDesk} href={`/`}>
        <Icon name="icon-logoDesk" width={220} height={64} />
      </Link>

      <nav className={styles.nav}>
        <ul>
          {menuItems.map((item, index) => (
            <li key={index}>
              <Link href={item.href}>{t(item.label)} </Link>
            </li>
          ))}
        </ul>
      </nav>
      <LanguageSwitcher lang={lang} />
      <Button>
        {t('Main.button')}
        {lang === 'sk' && <TSvgMedium color="#ffffff" />}
      </Button>
      <div
        className={`${styles.burgerWrap} ${
          isMenuOpen ? styles.burgerOpen : ''
        }`}
        onClick={isMenuOpen ? closeMenu : openMenu}
      >
        <span className={styles.line}></span>
        <span className={styles.line}></span>
        <span className={styles.line}></span>
      </div>

      <MobMenu isMenuOpen={isMenuOpen} closeMenu={closeMenu} />
    </header>
  );
}
