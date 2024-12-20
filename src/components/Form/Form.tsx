'use client';

import ReactDOM from 'react-dom';
import styles from './Form.module.css';
import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import Button from '../Button/Button';
import TSvgMedium from '@/helpers/TSvgMedium';
import { sendMessage, sendToGoogleScript } from '@/api/sendData';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
import Icon from '@/helpers/Icon';

interface FormProps {
  toggleForm: () => void;
  isFormOpen: boolean;
}
export default function Form({ toggleForm, isFormOpen }: FormProps) {
  const [isClient, setIsClient] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    nickname: '',
    email: '',
    quantity: 0,
    communication: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    phone: '',
    nickname: '',
  });

  const router = useRouter();

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: '' });
  };

  const handleQuantityChange = (value: number): void => {
    const newQuantity = Math.max(0, formData.quantity + value);
    setFormData({ ...formData, quantity: newQuantity });
  };

  const handleRadioChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setFormData({ ...formData, communication: e.target.id });
  };

  const validateForm = (): boolean => {
    const newErrors = { name: '', phone: '', nickname: '' };
    let isValid = true;

    if (!formData.name) {
      newErrors.name = 'Vyžaduje sa meno';
      isValid = false;
    }

    if (!formData.phone) {
      newErrors.phone = 'Vyžaduje sa telefónne číslo';
      isValid = false;
    }

    if (!formData.nickname) {
      newErrors.nickname = 'Priezvisko je povinné';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    if (!validateForm()) {
      toast.error('Vyplňte prosím všetky povinné polia!');
      return;
    }
    try {
      const message = {
        type: 'flexi',
        formData: {
          message: 'Користувач відправив форму',
          name: formData.name,
          surname: formData.nickname,
          quantity: formData.quantity,
          messenger: formData.communication,
          phone: formData.phone,
          email: formData.email,
        },
      };
      setIsLoading(true);
      await Promise.all([
        sendToGoogleScript(message),
        await sendMessage(message),
      ]);
      toast.success('Formulár bol úspešne odoslaný!');
      const currentQueryParams = new URLSearchParams(window.location.search);
      const queryParams = currentQueryParams.toString();

      router.push(queryParams ? `/confirm?${queryParams}` : `/confirm`);

      toggleForm();
    } catch {
      toast.error('Formulár sa nepodarilo odoslať, skúste to znova!');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return ReactDOM.createPortal(
    <div
      onClick={toggleForm}
      className={`${styles.backDrop} ${isFormOpen && styles.formOpen}`}
    >
      <div
        className={styles.formWrap}
        onClick={event => event.stopPropagation()}
      >
        <button className={styles.closeBtn} onClick={toggleForm} type="button">
          <Icon name="icon-close" width={16} height={16} color="#999" />
        </button>
        <h2 className={styles.header}>Formulár žiadosti</h2>

        <form className={styles.form} onSubmit={handleSubmit}>
          <label className={styles.label}>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Názov"
              className={`${styles.input} ${errors.name ? styles.error : ''}`}
              required
            />
            {errors.name && <p className={styles.errorText}>{errors.name}</p>}
          </label>

          <label className={styles.label}>
            <input
              type="text"
              name="nickname"
              value={formData.nickname}
              onChange={handleChange}
              placeholder="Priezvisko"
              className={`${styles.input} ${
                errors.nickname ? styles.error : ''
              }`}
              required
            />
            {errors.nickname && (
              <p className={styles.errorText}>{errors.nickname}</p>
            )}
          </label>

          <p className={styles.pricePar}>Počet súprav</p>
          <div className={styles.priceWrap}>
            <button
              className={styles.min}
              type="button"
              onClick={() => handleQuantityChange(-1)}
            ></button>
            <input
              required
              className={styles.quantity}
              type="number"
              placeholder="2"
              value={formData.quantity > 0 ? formData.quantity : ''}
              onChange={e => {
                const newQuantity = Math.max(0, Number(e.target.value));
                setFormData({ ...formData, quantity: newQuantity });
              }}
            />
            <button
              className={styles.plus}
              type="button"
              onClick={() => handleQuantityChange(1)}
            ></button>
            <span className={styles.priceTotal}>
              ={formData.quantity * 20}€
            </span>
          </div>

          <p className={styles.pricePar}>Spôsob komunikácie</p>
          <div className={styles.socWrap}>
            <label>
              <input
                type="radio"
                name="communication"
                id="whatsApp"
                onChange={handleRadioChange}
                checked={formData.communication === 'whatsApp'}
              />
              WhatsApp
            </label>
            <label>
              <input
                type="radio"
                name="communication"
                id="telegram"
                onChange={handleRadioChange}
                checked={formData.communication === 'telegram'}
              />
              Telegram
            </label>
            <label>
              <input
                type="radio"
                name="communication"
                id="viber"
                onChange={handleRadioChange}
                checked={formData.communication === 'viber'}
              />
              Viber
            </label>
          </div>

          <label className={styles.label}>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone number"
              inputMode="numeric"
              pattern="[\d\+\(\)\-\s]*"
              className={`${styles.input} ${errors.phone ? styles.error : ''}`}
              required
            />
            {errors.phone && <p className={styles.errorText}>{errors.phone}</p>}
          </label>

          <label className={styles.label}>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="E-mail"
              className={`${styles.input}`}
              required
            />
          </label>
          <span
            className={`${styles.loader} ${!isLoading ? styles.hidden : ''}`}
          ></span>
          <div className={`${isLoading ? styles.hidden : styles.formButton}`}>
            <Button type="submit">
              Dajte die
              <TSvgMedium color="#ffffff" />a<TSvgMedium color="#ffffff" />u
              výlet
            </Button>
          </div>
        </form>
      </div>
    </div>,
    document.getElementById('portal-root')!
  );
}
