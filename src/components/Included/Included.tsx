'use client';

import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image, { StaticImageData } from 'next/image';
import { slideItems as originalGalleryImages } from '@/data/data';
import { slideSKItems as originalSKGalleryImages } from '@/data/data';
import styles from './Included.module.css';
import Button from '../Button/Button';
import { includedItems } from '@/data/data';
import Icon from '@/helpers/Icon';
import TSvgMedium from '@/helpers/TSvgMedium';
import CBigSvg from '@/helpers/CBigSvg';
import CSvg from '@/helpers/CSvg';
import TSvg from '@/helpers/TSvg';
import { useEffect, useRef, useState } from 'react';
import { useTranslations } from 'next-intl';
import ModalComponent from '../Modals/ModalComponent';
import YouTube from 'react-youtube';
import SwiperCore from 'swiper';

export default function Included({ lang }: { lang: string }) {
  const t = useTranslations();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loadingImages, setLoadingImages] = useState<boolean[]>(
    Array(
      lang === 'sk'
        ? originalSKGalleryImages.length
        : originalGalleryImages.length
    ).fill(true)
  );
  const [selectedContent, setSelectedContent] = useState<
    StaticImageData | string | null
  >(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [videoTime, setVideoTime] = useState(0);
  const swiperRef = useRef<SwiperCore | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const videoSrc = lang === 'sk' ? '/assets/sk.mp4' : '/assets/uk.mp4';
  const youtubeShortsId = lang === 'sk' ? 'HV_PMnahLSY' : 'beYBmCEyKq0';
  const galleryImages =
    lang === 'sk' ? originalSKGalleryImages : originalGalleryImages;

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedContent(null);
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  const handleContentClick = (content: StaticImageData | string) => {
    if (content === videoSrc && videoRef.current) {
      setVideoTime(videoRef.current.currentTime);
    }
    setSelectedContent(content);
    setIsModalOpen(true);
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  const handleImageLoad = (index: number) => {
    setLoadingImages(prev => {
      const updated = [...prev];
      updated[index] = false;
      return updated;
    });
  };

  const playVideo = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current
        .play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch(error => {
          console.error('Error playing video:', error);
        });
    }
  };

  const pauseVideo = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const handleVideoClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current && isPlaying) {
      pauseVideo();
    }
  };

  const handleExpandClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    handleContentClick(videoSrc);
  };

  const updatePagination = () => {
    if (!swiperRef.current) return;

    const totalSlides = galleryImages.length + 1;
    const maxBullets = 8;
    const half = Math.floor(maxBullets / 2);
    const activeIndex = swiperRef.current.realIndex || 0;

    let start = activeIndex - half;
    let end = activeIndex + half + 1;

    if (activeIndex !== 0) {
      pauseVideo();
    }

    if (start < 0) {
      start = 0;
      end = maxBullets;
    }
    if (end > totalSlides) {
      end = totalSlides;
      start = totalSlides - maxBullets;
    }
    if (totalSlides < maxBullets) {
      start = 0;
      end = totalSlides;
    }

    const bullets = document.querySelectorAll<HTMLElement>(
      `.${styles.pagination} .swiper-pagination-bullet`
    );
    bullets.forEach((bullet, index) => {
      if (index >= start && index < end) {
        bullet.style.display = 'inline-block';
      } else {
        bullet.style.display = 'none';
      }
    });
  };

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen]);

  const totalSlides = galleryImages.length + 1;
  const enableLoop = totalSlides >= 2;

  const youtubeOpts = {
    height: '610',
    width: '350',
    playerVars: {
      autoplay: 1,
      start: Math.floor(videoTime),
      controls: 1,
    },
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
          type: 'bullets',
          bulletClass: `swiper-pagination-bullet`,
          bulletActiveClass: `swiper-pagination-bullet-active`,
          renderBullet: function (index, className) {
            return `<span class="${className}"></span>`;
          },
        }}
        spaceBetween={32}
        slidesPerView={1}
        className={styles.gallerySlider}
        modules={[Navigation, Pagination]}
        loop={enableLoop}
        onSwiper={swiper => {
          swiperRef.current = swiper;
          setTimeout(updatePagination, 0);
        }}
        onSlideChange={() => {
          updatePagination();
          if (!isPlaying) {
            pauseVideo();
          }
        }}
      >
        <SwiperSlide>
          <div className={styles.video_wrapper}>
            <video
              ref={videoRef}
              src={videoSrc}
              className={styles.slider_image}
              onClick={handleVideoClick}
              style={{ cursor: isPlaying ? 'pointer' : 'default' }}
            />
            {!isPlaying && (
              <div className={styles.image_wrapper}>
                <div className={styles.play_wrapper} onClick={playVideo}>
                  <Icon name="icon-play" width={136} height={136} />
                </div>
                <p className={styles.play_text}>{t('Included.video')}</p>
              </div>
            )}
            <div
              className={styles.expand_logo_wrapper}
              onClick={handleExpandClick}
            >
              <Icon
                className={styles.expand_logo}
                color="white"
                name="icon-expand"
                width={30}
                height={30}
              />
            </div>
          </div>
        </SwiperSlide>
        {galleryImages.map((image, index) => (
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
              onClick={() => handleContentClick(image)}
              style={{ cursor: 'pointer' }}
            />
          </SwiperSlide>
        ))}
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
      <ModalComponent isOpen={isModalOpen} onClose={closeModal}>
        {selectedContent &&
          (typeof selectedContent === 'string' &&
          selectedContent === videoSrc ? (
            <YouTube
              videoId={youtubeShortsId}
              opts={youtubeOpts}
              className={styles.modal_video}
            />
          ) : (
            <Image
              src={selectedContent}
              alt="Збільшене зображення"
              className={styles.modal_image}
              width={0}
              height={0}
              sizes="100vw"
            />
          ))}
      </ModalComponent>
    </section>
  );
}
