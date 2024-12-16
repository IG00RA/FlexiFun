'use client';

import styles from './Confirm.module.css';
import TSvgSmall from '@/helpers/TSvgSmall';
import TSvg from '@/helpers/TSvg';
import { sendMessage, sendToGoogleScript } from '@/api/sendData';
import { toast } from 'react-toastify';
import { useState } from 'react';

export default function Confirm() {
  const [isLoading, setIsLoading] = useState(false);
  const CHAT_URL = process.env.NEXT_PUBLIC_CHAT_URL || '';

  const handleSubmit = async () => {
    try {
      const message = {
        type: 'flexi',
        bot: true,
        formData: {
          message: 'Користувач перейшов в бот',
        },
      };
      setIsLoading(true);
      await sendToGoogleScript(message);
      await sendMessage(message);
      toast.success('Formulár bol úspešne odoslaný!');

      setIsLoading(false);
      window.location.href = CHAT_URL;
    } catch (error) {
      setIsLoading(false);

      if (error instanceof Error) {
        toast.error(
          `Formulár sa nepodarilo odoslať, skúste to znova! ${error.message}`
        );
      } else {
        toast.error(
          'Formulár sa nepodarilo odoslať, skúste to znova! Neznáma chyba.'
        );
      }
    }
  };

  return (
    <section className={styles.confirm}>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <p className={styles.text}>FlexiFun - divoká príroda savany</p>
          <h1 className={styles.header}>
            Objavte svet prírody a hrdinských dobrodružstiev pre svoje die
            <TSvg />
            a!
          </h1>
          <div className={styles.confirmImg}></div>
          <p className={styles.par}>
            Vzdelávacia hracia súprava, v ktorej sa učenie biológie stáva
            vzrušujúcim dobrodružstvom, ktoré aktivuje všetky kľúčové oblasti
            rozvoja vášho
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
          </p>
          <div className={styles.buttonWrap}>
            <div className={styles.priceWrap}>
              <span className={styles.styledPrice}>65€</span>
              <span className={styles.styledPriceSecond}>20€</span>
            </div>
            <span
              className={`${styles.loader} ${!isLoading ? styles.hidden : ''}`}
            ></span>
            <button
              type="button"
              onClick={handleSubmit}
              className={`${isLoading ? styles.hidden : styles.button}`}
            >
              Go to bot
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
