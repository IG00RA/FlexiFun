import styles from './Await.module.css';
import Button from '../Button/Button';
import { awaitItems } from '@/data/data';
import TSvgMedium from '@/helpers/TSvgMedium';
import CSvg from '@/helpers/CSvg';
import TSvg from '@/helpers/TSvg';
import CBigSvg from '@/helpers/CBigSvg';
import { replaceSymbol } from '@/helpers/replaceSymbol';

export default function Await() {
  return (
    <section className={styles.await}>
      <h2 className={styles.header}>
        <CBigSvg />o <CSvg />
        aká vaše{' '}
        <span className={styles.symbol}>
          die
          <TSvg />
          a?
        </span>
      </h2>
      <ul className={styles.list}>
        {awaitItems.map((item, index) => (
          <li key={index}>
            <p className={styles.par}>
              {replaceSymbol(
                item,
                { t: TSvgMedium },
                { tProps: { color: '#ffffff', top: '2px' } }
              )}
            </p>
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
