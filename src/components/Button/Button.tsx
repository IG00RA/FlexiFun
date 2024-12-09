'use client';

import { useState } from 'react';
import styles from './Button.module.css';
import Form from '../Form/Form';

interface ButtonProps {
  type?: 'button' | 'reset' | 'submit';
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ type = 'button', children }) => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const toggleForm = () => {
    if (type === 'submit') {
      return;
    }
    setIsFormOpen(prevState => !prevState);
  };
  return (
    <>
      <button onClick={toggleForm} className={`${styles.button}`} type={type}>
        {children}
      </button>
      {isFormOpen && <Form toggleForm={toggleForm} />}
    </>
  );
};

export default Button;
