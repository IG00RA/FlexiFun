'use client';

import Link from 'next/link';
import styles from './Header.module.css';
import Icon from '@/helpers/Icon';
import MobMenu from '../MobMenu/MobMenu';
import { useState } from 'react';
import { menuItems } from '@/data/data';

export default function Header() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

 
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
    <header
      className={`${styles.header} ${isMenuOpen && styles.mobile_menu_open}`}
    >
      <Link className={styles.logo_wrap} href={`/`}>
        <Icon name="icon-logoMob" width={116} height={35} />
      </Link>
      {/* 
      <nav className={styles.nav}>
        <ul>
          {menuItems.map((item, index) => (
            <li key={index}>
              <Link href={item.href}>{t(item.label)}</Link>
            </li>
          ))}
        </ul>
      </nav> */}

      <div
        className={`${styles.burger_wrap} ${
          isMenuOpen ? styles.burger_open : ''
        }`}
        onClick={isMenuOpen ? closeMenu : openMenu}
      >
        <span className={styles.line}></span>
        <span className={styles.line}></span>
        <span className={styles.line}></span>
      </div>

      <MobMenu
        isMenuOpen={isMenuOpen}
        closeMenu={closeMenu}
      />
    </header>
  );
}
