import styles from './Important.module.css';
import Image from 'next/image';
import Button from '../Button/Button';
import { importantItems } from '@/data/data';
import CSvg from '@/helpers/CSvg';
import TSvg from '@/helpers/TSvg';
import { replaceSymbol } from '@/helpers/replaceSymbol';
import TSvgSmall from '@/helpers/TSvgSmall';
import TSvgMedium from '@/helpers/TSvgMedium';

export default function Important() {
  return (
    <section className={styles.important}>
      <h2 className={styles.header}>
        Pre
        <CSvg />o je to pre vaše die
        <TSvg />a dôležité
      </h2>
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
              <h3 className={styles.parHead}>
                {replaceSymbol(item.head, { t: TSvg, c: CSvg })}
              </h3>
              <p className={styles.par}>
                {replaceSymbol(item.text, { t: TSvgSmall })}
              </p>
            </div>
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
