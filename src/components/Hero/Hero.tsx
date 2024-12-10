import styles from './Hero.module.css';
import Button from '../Button/Button';
import TSvgMedium from '@/helpers/TSvgMedium';
import TSvgSmall from '@/helpers/TSvgSmall';
import TSvg from '@/helpers/TSvg';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <p className={styles.text}>FlexiFun - divoká príroda savany</p>
          <h1 className={styles.header}>
            Objavte svet prírody a hrdinských dobrodružstiev pre svoje die
            <TSvg />
            a!
          </h1>
          <div className={styles.heroImg}></div>
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
            <Button>
              Dajte die
              <TSvgMedium color="#ffffff" />a
              <TSvgMedium color="#ffffff" />u výlet
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
