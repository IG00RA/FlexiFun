import { menuItems } from '@/data/data';
import styles from './MobMenu.module.css';
import Icon from '@/helpers/Icon';
import Link from 'next/link';
import Button from '../Button/Button';

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
      {/* <div
        className={styles.burger_menu}
        onClick={event => event.stopPropagation()}
      >
        <p>{t('Footer.menu.menu')}</p>
        <nav className={styles.nav}>
          <ul>
            {menuItems.map((item, index) => (
              <li
                className={styles.mobile_link}
                key={index}
                onClick={closeMenu}
              >
                <Link href={item.href}>{t(item.label)}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <ul className={styles.social}>
          {socialItems.map((item, index) => (
            <li key={index}>
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                <Icon name={item.icon} width={32} height={32} />
              </a>
            </li>
          ))}
        </ul>

        <div className={styles.button_wrap}>
          <Button />
        </div>
      </div> */}
    </div>
  );
}
