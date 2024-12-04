import Icon from '@/helpers/Icon';
import styles from './Footer.module.css';
import Link from 'next/link';
import Button from '../Button/Button';
import { menuItems } from '@/data/data';

export default function Footer() {

  return (
    <section className={styles.footer}>
      {/* <div className={styles.container}>
        <div className={styles.wrap}>
          <div className={styles.menu_wrap}>
            <Link className={styles.logo_wrap} href={`/${locale}/`}>
              <Icon name="icon-logo-dark" width={40} height={33} />
              <span>{t('Header.home')}</span>
            </Link>
            <div className={styles.nav_wrap}>
              <p className={styles.menu}>{t('Footer.menu.menu')}</p>
              <nav className={styles.nav}>
                <ul>
                  {menuItems.map((item, index) => (
                    <li key={index}>
                      <Link href={item.href}>{t(item.label)}</Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
            <ul className={styles.social}>
              {socialItems.map((item, index) => (
                <li key={index}>
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    <Icon name={item.icon} width={32} height={32} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.second_wrap}>
            <div className={styles.lang_wrap}>
              <LanguageSwitcher
                locale={locale}
                handleLanguageChange={handleLanguageChange}
              />
            </div>
            <div className={styles.button_wrap}>
              <Button />
            </div>
          </div>
        </div>
        <div className={styles.policy_wrap}>
          <a href="/" target="_blank" rel="noopener noreferrer">
            {t('Footer.policy')}
          </a>

          <ul className={styles.social_desk}>
            {socialItems.map((item, index) => (
              <li key={index}>
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  <Icon name={item.icon} width={32} height={32} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div> */}
    </section>
  );
}
