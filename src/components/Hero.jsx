import React, { useEffect, useState } from 'react'

import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import { Link } from 'react-router-dom';


function Header() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 500);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 600);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className=' mt-[60px]'>
      <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={10}
      slidesPerView={isMobile ? 1 : 3}
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
      <SwiperSlide><Link to='/all-products'><img className=' h-[400px] min-w-full lg:h-[500px] xl:h-[500px]' src='https://images.bewakoof.com/uploads/grid/app/MadDiwali-Sale-1x1-Day01-Common-1698763265.jpg' /></Link></SwiperSlide>
      <SwiperSlide><Link to='/all-products'><img className=' h-[400px] min-w-full lg:h-[500px] xl:h-[500px]' src='https://images.bewakoof.com/uploads/grid/app/SweatersFlatknits-1x1-sweaters-common-1699022763.jpg' /></Link></SwiperSlide>
      <SwiperSlide><Link to='/all-products'><img className=' h-[400px] min-w-full lg:h-[500px] xl:h-[500px]' src='https://images.bewakoof.com/uploads/grid/app/NEW-1x1-SweatsHoodies-70-COMMON-1699005018.jpg' /></Link></SwiperSlide>
      <SwiperSlide><Link to='/all-products'><img className=' h-[400px] min-w-full lg:h-[500px] xl:h-[500px]' src='https://images.bewakoof.com/uploads/grid/app/Sale-1x1-Banner-buy-3-at-1199-1698766264.jpg' /></Link></SwiperSlide>
      <SwiperSlide><Link to='/all-products'><img className=' h-[400px] min-w-full lg:h-[500px] xl:h-[500px]' src='https://images.bewakoof.com/uploads/grid/app/Bhupendra-Jogi-1x1-Banner--1--1698998581.jpg' /></Link></SwiperSlide>
    </Swiper>
    </div>
  )
}

export default Header