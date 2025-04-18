import { menuItems } from '@/data/data';
import styles from './MobMenu.module.css';
import Icon from '@/helpers/Icon';
import Link from 'next/link';
import Button from '../Button/Button';
import TSvgMedium from '@/helpers/TSvgMedium';
import { useTranslations } from 'next-intl';
import useLanguageStore from '@/store/useLanguageStore';

type MobMenuProps = {
  isMenuOpen: boolean;
  closeMenu: () => void;
};

export default function MobMenu({ isMenuOpen, closeMenu }: MobMenuProps) {
  const t = useTranslations();
  const { query, locale } = useLanguageStore();
  return (
    <div
      onClick={closeMenu}
      className={`${styles.mobileWrap} ${isMenuOpen && styles.mobileMenuOpen}`}
    >
      <div
        className={styles.burgerMenu}
        onClick={event => event.stopPropagation()}
      >
        <Link
          className={styles.logoWrap}
          onClick={closeMenu}
          href={`/${locale}/${query}`}
        >
          <Icon name="icon-logoMob" width={116} height={35} color={'#fff'} />
        </Link>

        <nav className={styles.nav}>
          <ul>
            {menuItems.map((item, index) => (
              <li key={index}>
                <Link
                  onClick={closeMenu}
                  href={`/${locale}/${query}${item.href}`}
                >
                  {t(item.label)}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <a
          className={styles.policy}
          href={t('Footer.policyLink')}
          target="_blank"
          rel="noopener noreferrer"
        >
          {t('Footer.policy')}
        </a>
        <div className={styles.btn_wrap} onClick={closeMenu}>
          <Button>
            {t('Main.button')}
            {locale === 'sk' && <TSvgMedium color="#ffb088" />}
          </Button>
        </div>
      </div>
    </div>
  );
}
