import styles from './Await.module.css';
import Button from '../Button/Button';
import { awaitItems } from '@/data/data';

export default function Await() {
  return (
    <section className={styles.await}>
      <h2 className={styles.header}>Čo čaká vaše dieťa?</h2>
      <ul className={styles.list}>
        {awaitItems.map((item, index) => (
          <li key={index}>
            <p className={styles.par}>{item}</p>
          </li>
        ))}
      </ul>
      <Button text="Objednať sadu" />
    </section>
  );
}
