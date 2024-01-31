import React from "react";

import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";

function EndingSection() {
    const cards = [
        { title: "Mobile Covers", img: "https://www.layers.shop/cdn/shop/files/black_crack_98de6b18-5dd2-4a21-993f-8a0eada9e9a0.jpg?v=1695188371&width=1860" },
        { title: "Sliders", img: "https://images.bewakoof.com/t640/team-minion-comfysole-mens-sliders-590968-1688467668-1.jpg" },
        { title: "Bagpacks", img: "https://th.bing.com/th/id/OIP.gqDjOvAbK0v75ticG1yr5AHaKb?pid=ImgDet&w=207&h=291&c=7&dpr=1.3" },
        { title: "Caps", img: "https://th.bing.com/th/id/OIP.tXGOwJEj-ZcTD7g1u_DSkgHaJQ?pid=ImgDet&w=198&h=247&c=7&dpr=1.3" },
    ]
    const renderedCards = cards.map((card, index) => {
        return (
            <div className=' cursor-pointer' key={index}>
                <img className=' h-[300px] w-[250px] px-2' src={card.img} />
                <h1 className=' font-poppins font-bold text-center text-lg text-[#4d4d4d] py-4'>{card.title}</h1>
            </div>
        )
    })
  return (
    <div>
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
        // onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide>
          <img src="https://images.bewakoof.com/uploads/grid/app/NovCOTM-Mickey-1x1-Graphic-1698909300.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://images.bewakoof.com/uploads/grid/app/NEW-1x1-HeavyDuty-COMMON-Winter-1699010278.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://images.bewakoof.com/uploads/grid/app/1X1-PARACHUTE-Offer--2--1698764946.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://images.bewakoof.com/uploads/grid/app/NEW-1x1-PIMA-MEN-3-1699022761.jpg" />
        </SwiperSlide>
      </Swiper>
      <h1 className=' font-Krala font-bold text-center text-2xl py-5'>TRENDING CATEGORIES</h1>
            <div className=" mx-[200px]">
                <div className=' flex w-full justify-around my-3'>
                    {renderedCards}
                </div>
            </div>
        <img className=" w-full mb-1" src="https://images.bewakoof.com/uploads/grid/app/Desktop-Strip-3-1669022420.jpg" />
    </div>
  );
}

export default EndingSection;
