'use client';

import styles from './Questions.module.css';
import { questionsItems } from '@/data/data';
import Icon from '@/helpers/Icon';
import { useState } from 'react';
import Button from '../Button/Button';
import TSvgMedium from '@/helpers/TSvgMedium';
import CBigSvg from '@/helpers/CBigSvg';
import { replaceSymbol } from '@/helpers/replaceSymbol';
import TSvgSmall from '@/helpers/TSvgSmall';
import CSvgMedium from '@/helpers/CSvgMedium';
import { useTranslations } from 'next-intl';

export default function Questions({ lang }: { lang: string }) {
  const t = useTranslations();
  const [openIndices, setOpenIndices] = useState<number[]>([]);

  const toggleDropdown = (index: number): void => {
    setOpenIndices(prev =>
      prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
    );
  };

  return (
    <section id="questions" className={styles.questions}>
      <h2 className={styles.header}>
        {lang === 'sk' && <CBigSvg />}
        {t('Questions.header')}
      </h2>

      <ul className={styles.list}>
        {questionsItems.map((item, index) => (
          <li
            key={index}
            onClick={() => toggleDropdown(index)}
            className={`${styles.item} ${
              openIndices.includes(index) ? `${styles.open}` : ''
            }`}
          >
            <div className={styles.mainWrap}>
              <div className={styles.parWrap}>
                <span className={styles.numbWrap}>{item.numb}</span>

                <h3 className={styles.parHead}>
                  {replaceSymbol(
                    t(item.head),
                    { t: TSvgMedium, c: CSvgMedium },
                    { tProps: { top: '2px' }, cProps: { top: '4px' } }
                  )}
                </h3>
              </div>
              <button
                type="button"
                className={`${styles.button} ${
                  openIndices.includes(index) ? styles.active : ''
                }`}
              >
                <Icon name="icon-arrrow_quests" width={14} height={26} />
              </button>
            </div>
            <p
              className={`${styles.dropBox} ${
                openIndices.includes(index) ? `${styles.open}` : ''
              }`}
            >
              {replaceSymbol(t(item.text), { t: TSvgSmall })}
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
