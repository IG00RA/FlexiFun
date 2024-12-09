import { menuItems } from '@/data/data';
import styles from './MobMenu.module.css';
import Icon from '@/helpers/Icon';
import Link from 'next/link';
import Button from '../Button/Button';
import TSvgMedium from '@/helpers/TSvgMedium';

type MobMenuProps = {
  isMenuOpen: boolean;
  closeMenu: () => void;
};

export default function MobMenu({ isMenuOpen, closeMenu }: MobMenuProps) {
  return (
    <div
      onClick={closeMenu}
      className={`${styles.mobile_wrap} ${
        isMenuOpen && styles.mobile_menu_open
      }`}
    >
      <div
        className={styles.burger_menu}
        onClick={event => event.stopPropagation()}
      >
        <Link className={styles.logo_wrap} href={`/`}>
          <Icon name="icon-logoMob" width={116} height={35} color={'#fff'} />
        </Link>

        <nav className={styles.nav}>
          <ul>
            {menuItems.map((item, index) => (
              <li key={index}>
                <Link onClick={closeMenu} href={item.href}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <a
          className={styles.policy}
          href="/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Zmluva s používateľom
        </a>
        <Button>
          Kúpi
          <TSvgMedium color="#ffb088" />
        </Button>
      </div>
    </div>
  );
}
