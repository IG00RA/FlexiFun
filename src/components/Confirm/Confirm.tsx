'use client';

import { useTranslations } from 'next-intl';
import styles from './Confirm.module.css';
export default function Confirm() {
  const t = useTranslations();
  return (
    <section id="confirm" className={styles.confirm}>
      <div className={styles.container}>
        <h1 className={styles.header}>{t('Confirm.header')}</h1>
        <div className={styles.wrapper}>
          <p className={styles.text}>{t('Confirm.text')}</p>
        </div>
      </div>
    </section>
  );
}
