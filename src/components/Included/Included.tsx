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

export default function Included() {
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
        className={styles.gallery_slider}
        modules={[Navigation, Pagination]}
        loop={true}
      >
        {originalGalleryImages.map((image, index) => (
          <SwiperSlide key={index} className={styles.gallery_item}>
            <Image
              src={image}
              alt={`Slide o programe №${index + 1}`}
              className={styles.slider_image}
              width={0}
              height={0}
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
          <CBigSvg color="#ffffff" />o je sú
          <CSvg color="#ffffff" />
          as
          <TSvg color="#ffffff" />
          ou súpravy
        </h2>
        <p className={styles.text}>
          Úplné ponorenie do sveta ekológie a tvorivosti
        </p>
        <ul className={styles.list}>
          {includedItems.map((item, index) => (
            <li key={index}>
              <p className={styles.par}>{item}</p>
            </li>
          ))}
        </ul>
        <div className={styles.paginationWrap}>
          <div className={styles.prev}></div>
          <div className={styles.pagination}></div>
          <div className={styles.next}></div>
        </div>
        <Button>
          Objedna
          <TSvgMedium color="#ffb088" /> sadu
        </Button>
      </div>
    </section>
  );
}
