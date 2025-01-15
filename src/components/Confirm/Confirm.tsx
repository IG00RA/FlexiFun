'use client';

import { useTranslations } from 'next-intl';
import styles from './Confirm.module.css';
export default function Confirm() {
  const t = useTranslations();
  return (
    <section className={styles.confirm}>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <p className={styles.text}>{t('Confirm.header')}</p>
          <h1 className={styles.header}>{t('Confirm.text')}</h1>
        </div>
      </div>
    </section>
  );
}
