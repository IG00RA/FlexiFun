'use client';

import styles from './Hero.module.css';
import Button from '../Button/Button';
import TSvgMedium from '@/helpers/TSvgMedium';
import TSvgSmall from '@/helpers/TSvgSmall';
import TSvg from '@/helpers/TSvg';
import { useTranslations } from 'next-intl';

export default function Hero({ lang }: { lang: string }) {
  const t = useTranslations();
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <p className={styles.text}>{t('Hero.text')}</p>
          <h1 className={styles.header}>
            {t('Hero.header')}
            {lang === 'sk' && (
              <>
                <TSvg />
                a!
              </>
            )}
          </h1>
          <div className={styles.heroImg}></div>
          <p className={styles.par}>
            {t('Hero.par')}
            {lang === 'sk' && (
              <>
                <span className={styles.symbol}>
                  die
                  <TSvgSmall line={true} />
                  a<TSvgSmall line={true} />
                  a.
                </span>
                <span className={styles.symbolDesk}>
                  die
                  <TSvgSmall line={true} desk={true} />
                  a<TSvgSmall line={true} desk={true} />
                  a.
                </span>
              </>
            )}
          </p>
          <div className={styles.buttonWrap}>
            <div className={styles.priceWrap}>
              <span className={styles.styledPrice}>{t('Hero.price')}</span>
              <span className={styles.styledPriceSecond}>
                {t('Hero.priceSecond')}
              </span>
            </div>
            <Button>
              {t('Main.buttonSecond')}
              {lang === 'sk' && (
                <>
                  <TSvgMedium color="#ffffff" />a
                  <TSvgMedium color="#ffffff" />u výlet
                </>
              )}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
