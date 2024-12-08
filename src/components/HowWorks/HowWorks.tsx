import styles from './HowWorks.module.css';
import Button from '../Button/Button';
import { howWorksItems } from '@/data/data';

export default function HowWorks() {
  return (
    <section className={styles.howWorks}>
      <h2 className={styles.header}>Ako to funguje</h2>
      <div className={styles.imgWrap}></div>
      <div className={styles.topWrap}>
        <span className={styles.numbWrap}>4</span>
        <h3 className={styles.topText}>
          Kroky k pohlcujúcemu a pútavému učeniu
        </h3>
      </div>
      <ul className={styles.list}>
        {howWorksItems.map((item, index) => (
          <li key={index}>
            <span className={styles.numbWrapList}>{item.numb}</span>
            <div>
              <h3 className={styles.parHead}>{item.header}</h3>
              <p className={styles.par}>{item.text}</p>
            </div>
          </li>
        ))}
      </ul>
      <Button>Objednať sadu</Button>
    </section>
  );
}
