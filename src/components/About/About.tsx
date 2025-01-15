'use client';

import styles from './About.module.css';
import Button from '../Button/Button';
import { aboutItems } from '@/data/data';
import Icon from '@/helpers/Icon';
import TSvgMedium from '@/helpers/TSvgMedium';
import CSvg from '@/helpers/CSvg';
import { useTranslations } from 'next-intl';

export default function About({ lang }: { lang: string }) {
  const t = useTranslations();

  return (
    <section id="about" className={styles.about}>
      <div className={styles.imgWrap}></div>
      <div className={styles.wrapper}>
        <h2 className={styles.header}>
          {lang === 'sk' && (
            <>
              O <CSvg />
            </>
          )}
          {t('About.header')}
        </h2>
        <p className={styles.text}>{t('About.text')}</p>
        <ul className={styles.list}>
          {aboutItems.map((item, index) => (
            <li key={index}>
              <div className={styles.iconWrap}>
                <Icon name="icon-arrow_r" width={16} height={16} />
              </div>
              <p className={styles.par}>{t(item)}</p>
            </li>
          ))}
        </ul>
        <Button>
          {t('Main.buttonThird')}
          {lang === 'sk' && (
            <>
              <TSvgMedium color="#ffffff" /> sadu
            </>
          )}
        </Button>
      </div>
    </section>
  );
}
