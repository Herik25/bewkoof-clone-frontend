import React from 'react'

import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';


function Header() {

  return (
    <div className=' mt-[60px]'>
      <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={10}
      slidesPerView={3}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      // onSwiper={(swiper) => console.log(swiper)}
      // onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide><img src='https://images.bewakoof.com/uploads/grid/app/MadDiwali-Sale-1x1-Day01-Common-1698763265.jpg' /></SwiperSlide>
      <SwiperSlide><img src='https://images.bewakoof.com/uploads/grid/app/SweatersFlatknits-1x1-sweaters-common-1699022763.jpg' /></SwiperSlide>
      <SwiperSlide><img src='https://images.bewakoof.com/uploads/grid/app/NEW-1x1-SweatsHoodies-70-COMMON-1699005018.jpg' /></SwiperSlide>
      <SwiperSlide><img src='https://images.bewakoof.com/uploads/grid/app/Sale-1x1-Banner-buy-3-at-1199-1698766264.jpg' /></SwiperSlide>
      <SwiperSlide><img src='https://images.bewakoof.com/uploads/grid/app/Bhupendra-Jogi-1x1-Banner--1--1698998581.jpg' /></SwiperSlide>
    </Swiper>
    </div>
  )
}

export default Header