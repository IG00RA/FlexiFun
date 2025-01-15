'use client';

import styles from './Reasons.module.css';
import Image from 'next/image';
import Button from '../Button/Button';
import { reasonsItems } from '@/data/data';
import TSvgMedium from '@/helpers/TSvgMedium';
import CSvg from '@/helpers/CSvg';
import { replaceSymbol } from '@/helpers/replaceSymbol';
import TSvgSmall from '@/helpers/TSvgSmall';
import { useTranslations } from 'next-intl';

export default function Reasons({ lang }: { lang: string }) {
  const t = useTranslations();
  return (
    <section id="reasons" className={styles.reasons}>
      <div className={styles.container}>
        <h2 className={styles.header}>
          {t('Reasons.header')}
          {lang === 'sk' && (
            <>
              <CSvg />o si rodi
              <CSvg />
              ia vyberajú FlexiFun
            </>
          )}
        </h2>

        <ul className={styles.list}>
          {reasonsItems.map((item, index) => (
            <li key={index}>
              <h3 className={styles.parHead}> {t(item.head)}</h3>
              <div className={styles.reasonsImg}>
                <Image
                  src={item.img}
                  width={0}
                  height={0}
                  sizes="100vw"
                  alt="Deti v savane"
                  priority
                ></Image>
              </div>
              <ul className={styles.parList}>
                <li>
                  <p>{replaceSymbol(t(item.text.first), { t: TSvgSmall })}</p>
                </li>
                <li>
                  <p>{t(item.text.second)}</p>
                </li>
                <li>
                  <p>{t(item.text.third)}</p>
                </li>
                <li>
                  <p>{t(item.text.fourth)}</p>
                </li>
              </ul>
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
