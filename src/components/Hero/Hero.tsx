import styles from './Hero.module.css';
import Button from '../Button/Button';
import { heroItems } from '@/data/data';
import Icon from '@/helpers/Icon';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        {/* <h1 className={styles.header}>{t('Hero.header')}</h1>
        <p className={styles.text}>
          {t('Hero.text.first')}
          <span>{t('Hero.text.second')}</span>
          {t('Hero.text.third')}
        </p>
        <div className={styles.button_wrap}>
          <Button />
          <p>{t('Hero.buttonText')}</p>
        </div>
        <div className={styles.background}></div>
        <ul className={styles.list}>
          {heroItems.map((item, index) => (
            <li key={index}>
              <Icon name={item.img} width={40} height={40} />
              <p>
                {t(item.text.first)}
                <span>{t(item.text.second)}</span>
                {t(item.text.third)}
              </p>
            </li>
          ))}
        </ul> */}
      </div>
    </section>
  );
}
