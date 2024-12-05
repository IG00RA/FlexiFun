import styles from './Reasons.module.css';
import Image from 'next/image';
import Button from '../Button/Button';
import { reasonsItems } from '@/data/data';

export default function Reasons() {
  return (
    <section className={styles.reasons}>
      <div className={styles.container}>
        <h1 className={styles.header}>
          4 dôvody, prečo si rodičia vyberajú FlexiFun
        </h1>

        <ul className={styles.list}>
          {reasonsItems.map((item, index) => (
            <li key={index}>
              <h3 className={styles.parHead}>{item.head}</h3>
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
                  <p>{item.text.first}</p>
                </li>
                <li>
                  <p>{item.text.second}</p>
                </li>
                <li>
                  <p>{item.text.third}</p>
                </li>
                <li>
                  <p>{item.text.fourth}</p>
                </li>
              </ul>
            </li>
          ))}
        </ul>

        <Button text="Objednať sadu" />
      </div>
    </section>
  );
}
