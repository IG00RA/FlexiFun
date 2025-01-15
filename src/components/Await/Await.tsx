'use client';

import styles from './Await.module.css';
import Button from '../Button/Button';
import { awaitItems } from '@/data/data';
import TSvgMedium from '@/helpers/TSvgMedium';
import CSvg from '@/helpers/CSvg';
import TSvg from '@/helpers/TSvg';
import CBigSvg from '@/helpers/CBigSvg';
import { replaceSymbol } from '@/helpers/replaceSymbol';
import { useTranslations } from 'next-intl';

export default function Await({ lang }: { lang: string }) {
  const t = useTranslations();
  return (
    <section className={styles.await}>
      <h2 className={styles.header}>
        {lang === 'sk' && (
          <>
            <CBigSvg />o <CSvg />
            aká vaše{' '}
            <span className={styles.symbol}>
              die
              <TSvg />
              a?
            </span>
          </>
        )}
        {t('Await.header')}
      </h2>
      <ul className={styles.list}>
        {awaitItems.map((item, index) => (
          <li key={index}>
            <p className={styles.par}>
              {replaceSymbol(
                t(item),
                { t: TSvgMedium },
                { tProps: { color: '#ffffff', top: '2px' } }
              )}
            </p>
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
