'use client';

import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image';
import { slideItems as originalGalleryImages } from '@/data/data';
import styles from './Included.module.css';
import Button from '../Button/Button';
import { includedItems } from '@/data/data';
import Icon from '@/helpers/Icon';
import TSvgMedium from '@/helpers/TSvgMedium';
import CBigSvg from '@/helpers/CBigSvg';
import CSvg from '@/helpers/CSvg';
import TSvg from '@/helpers/TSvg';
import { useState } from 'react';
import { useTranslations } from 'next-intl';

export default function Included({ lang }: { lang: string }) {
  const t = useTranslations();
  const [loadingImages, setLoadingImages] = useState<boolean[]>(
    Array(originalGalleryImages.length).fill(true)
  );

  const handleImageLoad = (index: number) => {
    setLoadingImages(prev => {
      const updated = [...prev];
      updated[index] = false;
      return updated;
    });
  };

  return (
    <section id="included" className={styles.included}>
      <Swiper
        navigation={{
          prevEl: `.${styles.prev}`,
          nextEl: `.${styles.next}`,
        }}
        pagination={{
          clickable: true,
          el: `.${styles.pagination}`,
        }}
        spaceBetween={32}
        slidesPerView={1}
        className={styles.gallerySlider}
        modules={[Navigation, Pagination]}
        loop={true}
      >
        {originalGalleryImages.map((image, index) => (
          <SwiperSlide key={index}>
            {loadingImages[index] && (
              <div className={styles.loader}>
                <Icon name="icon-load" width={55} height={55} color="#ffb088" />
              </div>
            )}
            <Image
              src={image}
              alt={`Slide o programe №${index + 1}`}
              className={styles.sliderImage}
              width={0}
              height={0}
              onLoad={() => handleImageLoad(index)}
              sizes="100vw"
            />
          </SwiperSlide>
        ))}
        <div className={styles.imageWrapper}>
          <div className={styles.playWrapper}>
            <Icon name="icon-play" width={136} height={136} />
          </div>
        </div>
      </Swiper>
      <div className={styles.parWrap}>
        <h2 className={styles.header}>
          {lang === 'sk' && (
            <>
              <CBigSvg color="#ffffff" />o je sú
              <CSvg color="#ffffff" />
              as
              <TSvg color="#ffffff" />
            </>
          )}
          {t('Included.header')}
        </h2>
        <p className={styles.text}>{t('Included.text')}</p>
        <ul className={styles.list}>
          {includedItems.map((item, index) => (
            <li key={index}>
              <p className={styles.par}>{t(item)}</p>
            </li>
          ))}
        </ul>
        <div className={styles.paginationWrap}>
          <div className={styles.prev}></div>
          <div className={styles.pagination}></div>
          <div className={styles.next}></div>
        </div>
        <Button>
          {t('Main.buttonThird')}
          {lang === 'sk' && (
            <>
              <TSvgMedium color="#ffffff" /> sadu
            </>
          )}
        </Button>
      </div>
    </section>
  );
}
