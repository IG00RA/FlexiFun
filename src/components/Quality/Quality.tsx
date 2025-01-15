'use client';

import styles from './Quality.module.css';
import Image from 'next/image';
import Button from '../Button/Button';
import { qualityItems } from '@/data/data';
import TSvgMedium from '@/helpers/TSvgMedium';
import CSvg from '@/helpers/CSvg';
import { useTranslations } from 'next-intl';

export default function Quality({ lang }: { lang: string }) {
  const t = useTranslations();
  return (
    <section className={styles.quality}>
      <h2 className={styles.header}>
        {t('Quality.header')}
        {lang === 'sk' && (
          <>
            <CSvg />
            enie kvality
          </>
        )}
      </h2>
      <p className={styles.text}> {t('Quality.text')}</p>

      <ul className={styles.list}>
        {qualityItems.map((item, index) => (
          <li key={index}>
            <Image
              className={styles.qualityImg}
              src={item.img}
              width={0}
              height={0}
              sizes="100vw"
              alt="Zabezpečenie icona"
              priority
            ></Image>
            <h3 className={styles.parHead}>{t(item.head)}</h3>
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
