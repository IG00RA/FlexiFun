import styles from './Important.module.css';
import Image from 'next/image';
import Button from '../Button/Button';
import { importantItems } from '@/data/data';

export default function Important() {
  return (
    <section className={styles.important}>
      <h1 className={styles.header}>Prečo je to pre vaše dieťa dôležité</h1>
      <p className={styles.text}>Učenie hrou - cesta k budúcemu úspechu</p>
      <ul>
        {importantItems.map((item, index) => (
          <li key={index}>
            <Image
              className={styles.importantImg}
              src={item.img}
              width={0}
              height={0}
              sizes="100vw"
              alt="Deti v savane"
              priority
            ></Image>
            <h3 className={styles.parHead}>{item.head}</h3>
            <p className={styles.par}>{item.text}</p>
          </li>
        ))}
      </ul>
      <Button text="Objednať sadu" />
    </section>
  );
}