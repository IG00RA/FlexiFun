'use client';

import styles from './Important.module.css';
import Image from 'next/image';
import Button from '../Button/Button';
import { importantItems } from '@/data/data';
import CSvg from '@/helpers/CSvg';
import TSvg from '@/helpers/TSvg';
import { replaceSymbol } from '@/helpers/replaceSymbol';
import TSvgSmall from '@/helpers/TSvgSmall';
import TSvgMedium from '@/helpers/TSvgMedium';
import { useTranslations } from 'next-intl';

export default function Important({ lang }: { lang: string }) {
  const t = useTranslations();
  return (
    <section className={styles.important}>
      <h2 className={styles.header}>
        {t('Important.header')}
        {lang === 'sk' && (
          <>
            <CSvg />o je to pre vaše die
            <TSvg />a dôležité
          </>
        )}
      </h2>
      <p className={styles.text}>{t('Important.text')}</p>
      <ul className={styles.list}>
        {importantItems.map((item, index) => (
          <li key={index}>
            <Image
              className={styles.importantImg}
              src={item.img}
              width={0}
              height={0}
              sizes="100vw"
              alt="Deti v savane"
              priority
            ></Image>
            <div className={styles.listWrap}>
              <h3 className={styles.parHead}>
                {lang === 'sk'
                  ? replaceSymbol(t(item.head), { t: TSvg, c: CSvg })
                  : t(item.head)}
              </h3>
              <p className={styles.par}>
                {lang === 'sk'
                  ? replaceSymbol(t(item.text), { t: TSvgSmall })
                  : t(item.text)}
              </p>
            </div>
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
    </section>
  );
}
