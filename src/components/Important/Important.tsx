import styles from './Important.module.css';
import Image from 'next/image';
import Button from '../Button/Button';
import { importantItems } from '@/data/data';

export default function Important() {
  return (
    <section className={styles.important}>
      <h2 className={styles.header}>Prečo je to pre vaše dieťa dôležité</h2>
      <p className={styles.text}>Učenie hrou - cesta k budúcemu úspechu</p>
      <ul className={styles.list}>
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
            <div className={styles.listWrap}>
              <h3 className={styles.parHead}>{item.head}</h3>
              <p className={styles.par}>{item.text}</p>
            </div>
          </li>
        ))}
      </ul>
      <Button text="Objednať sadu" />
    </section>
  );
}
