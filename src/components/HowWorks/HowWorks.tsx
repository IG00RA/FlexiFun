'use client';

import styles from './HowWorks.module.css';
import Button from '../Button/Button';
import { howWorksItems } from '@/data/data';
import TSvgMedium from '@/helpers/TSvgMedium';
import { replaceSymbol } from '@/helpers/replaceSymbol';
import TSvgSmall from '@/helpers/TSvgSmall';
import { useTranslations } from 'next-intl';

export default function HowWorks({ lang }: { lang: string }) {
  const t = useTranslations();
  return (
    <section className={styles.howWorks}>
      <h2 className={styles.header}>{t('HowWorks.header')}</h2>
      <div className={styles.wrapper}>
        <div className={styles.imgWrap}></div>
        <div>
          <div className={styles.topWrap}>
            <span className={styles.numbWrap}>4</span>
            <h3 className={styles.topText}>{t('HowWorks.text')}</h3>
          </div>
          <ul className={styles.list}>
            {howWorksItems.map((item, index) => (
              <li key={index}>
                <span className={styles.numbWrapList}>{item.numb}</span>
                <div>
                  <h3 className={styles.parHead}>{t(item.header)}</h3>
                  <p className={styles.par}>
                    {replaceSymbol(t(item.text), { t: TSvgSmall })}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
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
