import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
import imgCarousel1 from './../assets/carousel/imageBanner1.png';
import imgCarousel2 from './../assets/carousel/imageBanner2.png';
import imgCarousel3 from './../assets/carousel/imageBanner3.png';

export default function Carousel() {
  const dataCarousel = [
    {
      name: 'Roll with the patrol',
      path: imgCarousel1,
    },
    {
      name: 'Roll with the patrol',
      path: imgCarousel2,
    },
    {
      name: 'Roll with the patrol',
      path: imgCarousel3,
    },
  ];
  return (
    <Swiper
      pagination={true}
      autoplay={{ delay: 2000 }}
      loop={true}
      modules={[Pagination, Autoplay]}
      className="mySwiper"
    >
      {dataCarousel.map((data, idx) => {
        return (
          <SwiperSlide key={idx}>
            <img src={data.path} className="w-full" alt={data.name} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
