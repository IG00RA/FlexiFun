import styles from './Hero.module.css';
import hero from '../../img/hero/heroMob.webp';
import Image from 'next/image';
import Button from '../Button/Button';
import TSvgMedium from '@/helpers/TSvgMedium';
import TSvgSmall from '@/helpers/TSvgSmall';
import TSvg from '@/helpers/TSvg';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <p className={styles.text}>FlexiFun - divoká príroda savany</p>
        <h1 className={styles.header}>
          Objavte svet prírody a hrdinských dobrodružstiev pre svoje die
          <TSvg />
          a!
        </h1>
        <Image
          className={styles.heroImg}
          src={hero}
          width={0}
          height={0}
          sizes="100vw"
          alt="Chlapec v savane"
          priority
        ></Image>
        <p className={styles.par}>
          Vzdelávacia hracia súprava, v ktorej sa učenie biológie stáva
          vzrušujúcim dobrodružstvom, ktoré aktivuje všetky kľúčové oblasti
          rozvoja vášho die
          <TSvgSmall line={true} />
          a<TSvgSmall line={true} />
          a.
        </p>
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
    </section>
  );
}
