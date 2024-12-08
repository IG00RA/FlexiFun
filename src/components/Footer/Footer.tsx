import Icon from '@/helpers/Icon';
import styles from './Footer.module.css';
import Link from 'next/link';
import Button from '../Button/Button';
import { menuItems } from '@/data/data';

export default function Footer() {
  return (
    <section className={styles.footer}>
      <div className={styles.container}>
        <Link className={styles.logo_wrap} href={`/`}>
          <Icon name="icon-logoMob" width={202} height={60} color={'#fff'} />
        </Link>
        <div className={styles.menuWrap}>
          <p className={styles.menu}>Ponuka</p>
          <nav className={styles.nav}>
            <ul>
              {menuItems.map((item, index) => (
                <li key={index}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <a
          className={styles.policy}
          href="/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Zmluva s používateľom
        </a>
        <Button>Kúpiť</Button>
      </div>
    </section>
  );
}
