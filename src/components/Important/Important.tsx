import styles from './Important.module.css';
import Image from 'next/image';
import Button from '../Button/Button';
import { importantItems } from '@/data/data';
import CSvg from '@/helpers/CSvg';
import TSvg from '@/helpers/TSvg';

const replaceTSymbol = (text: string): React.ReactNode[] => {
  const parts = text.split('ť');
  return parts.reduce<React.ReactNode[]>((acc, part, index) => {
    acc.push(part);
    if (index < parts.length - 1) {
      acc.push(<TSvg key={index} />);
    }
    return acc;
  }, []);
};

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
              <h3 className={styles.parHead}>{replaceTSymbol(item.head)}</h3>
              <p className={styles.par}>{replaceTSymbol(item.text)}</p>
            </div>
          </li>
        ))}
      </ul>
      <Button>
        Objedna
        <TSvg /> sadu
      </Button>
    </section>
  );
}
