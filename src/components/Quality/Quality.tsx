import styles from './Quality.module.css';
import Image from 'next/image';
import Button from '../Button/Button';
import { qualityItems } from '@/data/data';
import TSvgMedium from '@/helpers/TSvgMedium';
import CSvg from '@/helpers/CSvg';

export default function Quality() {
  return (
    <section className={styles.quality}>
      <h2 className={styles.header}>
        Zabezpe
        <CSvg />
        enie kvality
      </h2>
      <p className={styles.text}>Len to najlepšie pre vaše dieťa</p>

      <ul className={styles.list}>
        {qualityItems.map((item, index) => (
          <li key={index}>
            <Image
              className={styles.qualityImg}
              src={item.img}
              width={0}
              height={0}
              sizes="100vw"
              alt="Zabezpečenie icona"
              priority
            ></Image>
            <h3 className={styles.parHead}>{item.head}</h3>
          </li>
        ))}
      </ul>

      <Button>
        Objedna
        <TSvgMedium color="#ffffff" /> sadu
      </Button>
    </section>
  );
}
