'use client';

import Icon from '@/helpers/Icon';
import styles from './Footer.module.css';
import Link from 'next/link';
import Button from '../Button/Button';
import { menuItems } from '@/data/data';
import TSvgMedium from '@/helpers/TSvgMedium';
import { useTranslations } from 'next-intl';

export default function Footer({ lang }: { lang: string }) {
  const t = useTranslations();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.fistWrap}>
          <Link className={styles.logoWrap} href={`/`}>
            <Icon name="icon-logoMob" width={202} height={60} color={'#fff'} />
          </Link>
          <div className={styles.menuWrap}>
            <p className={styles.menu}> {t('Footer.menu.menu')}</p>
            <nav className={styles.nav}>
              <ul>
                {menuItems.map((item, index) => (
                  <li key={index}>
                    <Link href={item.href}>{t(item.label)}</Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
        <div className={styles.secondWrap}>
          <a
            className={styles.policy}
            href="/privacy-policy"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t('Footer.policy')}
          </a>
          <Button>
            {t('Main.button')}
            {lang === 'sk' && <TSvgMedium color="#ffb088" />}
          </Button>
        </div>
      </div>
    </footer>
  );
}
