import styles from './Reasons.module.css';
import Image from 'next/image';
import Button from '../Button/Button';
import { reasonsItems } from '@/data/data';
import TSvgMedium from '@/helpers/TSvgMedium';
import CSvg from '@/helpers/CSvg';
import { replaceSymbol } from '@/helpers/replaceSymbol';
import TSvgSmall from '@/helpers/TSvgSmall';

export default function Reasons() {
  return (
    <section id="reasons" className={styles.reasons}>
      <div className={styles.container}>
        <h2 className={styles.header}>
          4 dôvody, pre
          <CSvg />o si rodi
          <CSvg />
          ia vyberajú FlexiFun
        </h2>

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
                  <p>{replaceSymbol(item.text.first, { t: TSvgSmall })}</p>
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

        <Button>
          Objedna
          <TSvgMedium color="#ffffff" /> sadu
        </Button>
      </div>
    </section>
  );
}
