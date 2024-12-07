'use client';

import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image';
import { feedbackItems as originalGalleryImages } from '@/data/data';
import styles from './Feedback.module.css';
import Button from '../Button/Button';
import Icon from '@/helpers/Icon';

export default function Feedback() {
  const groupedItems = [];
  for (let i = 0; i < originalGalleryImages.length; i += 3) {
    groupedItems.push(originalGalleryImages.slice(i, i + 3));
  }

  return (
    <section className={styles.feedback}>
      <div className={styles.container}>
        <h2 className={styles.header}>Spätná väzba od rodičov a odborníkov</h2>
        <div className={styles.paginationWrap}>
          <div className={styles.prev}></div>
          <div className={styles.pagination}></div>
          <div className={styles.next}></div>
        </div>
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
          className={styles.gallery_slider}
          modules={[Navigation, Pagination]}
          loop={true}
        >
          {groupedItems.map((group, index) => (
            <SwiperSlide key={index} className={styles.gallery_item}>
              {group.map((item, subIndex) => (
                <div key={subIndex} className={styles.card}>
                  <div className={styles.imgWrap}>
                    <Image
                      src={item.img}
                      alt={item.head}
                      className={styles.slider_image}
                      width={0}
                      height={0}
                      sizes="100vw"
                    />
                  </div>
                  <p className={styles.card_text}>{item.text}</p>
                  <div className={styles.card_footer}>
                    <span className={styles.card_span}>{item.span}</span>
                    <h4 className={styles.card_head}>{item.head}</h4>
                  </div>
                </div>
              ))}
            </SwiperSlide>
          ))}
        </Swiper>

        <Button text="Objednať sadu" />
      </div>
    </section>
  );
}
