'use client';

import styles from './Questions.module.css';
import { questionsItems } from '@/data/data';
import Icon from '@/helpers/Icon';
import { useState } from 'react';
import Button from '../Button/Button';

export default function Questions() {
  const [openIndices, setOpenIndices] = useState<number[]>([]);

  const toggleDropdown = (index: number): void => {
    setOpenIndices(prev =>
      prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
    );
  };

  return (
    <section id="questions" className={styles.questions}>
      <h2 className={styles.header}>Často kladené otázky</h2>

      <ul className={styles.list}>
        {questionsItems.map((item, index) => (
          <li key={index}>
            <div className={styles.mainWrap}>
              <span className={styles.numbWrap}>{item.numb}</span>

              <h3 className={styles.parHead}>{item.head}</h3>

              <button
                type="button"
                className={`${styles.button} ${
                  openIndices.includes(index) ? styles.active : ''
                }`}
                onClick={() => toggleDropdown(index)}
              >
                <Icon name="icon-arrrow_quests" width={14} height={26} />
              </button>
            </div>
            <p
              className={`${styles.drop_box} ${
                openIndices.includes(index) ? `${styles.open}` : ''
              }`}
            >
              {item.text}
            </p>
          </li>
        ))}
      </ul>
      <Button>Objednať sadu</Button>
    </section>
  );
}
