import React from 'react';
import styles from './Button.module.css';
import Icon from '@/helpers/Icon';

const Button = () => {
  return (
    <a
      className={`${styles.button}`}
      href='/'
      target="_blank"
      rel="noopener noreferrer"
    >
     
      <Icon name="icon-right-btn" width={24} height={24} />
    </a>
  );
};

export default Button;
