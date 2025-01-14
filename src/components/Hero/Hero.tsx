'use client';

import styles from './Hero.module.css';
import Button from '../Button/Button';
import TSvgMedium from '@/helpers/TSvgMedium';
import TSvgSmall from '@/helpers/TSvgSmall';
import TSvg from '@/helpers/TSvg';
import useLanguageStore from '@/store/useLanguageStore';
import { useTranslations } from 'next-intl';

export default function Hero() {
  const t = useTranslations();
  const { isLang } = useLanguageStore();
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <p className={styles.text}>{t('Hero.text')}</p>
          <h1 className={styles.header}>
            {t('Hero.header')}
            {isLang && (
              <>
                <TSvg />
                a!
              </>
            )}
          </h1>
          <div className={styles.heroImg}></div>
          <p className={styles.par}>
            {t('Hero.par')}
            {isLang && (
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
              {isLang && (
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
