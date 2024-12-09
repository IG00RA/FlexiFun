import styles from './About.module.css';
import Button from '../Button/Button';
import { aboutItems } from '@/data/data';
import Icon from '@/helpers/Icon';
import TSvgMedium from '@/helpers/TSvgMedium';
import CSvg from '@/helpers/CSvg';

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.imgWrap}></div>
      <h2 className={styles.header}>
        O <CSvg />
        om je tento súbor?
      </h2>
      <p className={styles.text}>Fascinujúca interaktívna hra - rozprávka</p>
      <ul className={styles.list}>
        {aboutItems.map((item, index) => (
          <li key={index}>
            <div className={styles.iconWrap}>
              <Icon name="icon-arrow_r" width={16} height={16} />
            </div>
            <p className={styles.par}>{item}</p>
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
