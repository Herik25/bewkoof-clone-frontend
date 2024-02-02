import React, { useEffect, useState } from "react";

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
import { Link } from "react-router-dom";

function EndingSection() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 500);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 600);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const cards = [
    {
      title: "Mobile Covers",
      img: "https://www.layers.shop/cdn/shop/files/black_crack_98de6b18-5dd2-4a21-993f-8a0eada9e9a0.jpg?v=1695188371&width=1860",
      src: '#'
    },
    {
      title: "Sliders",
      img: "https://images.bewakoof.com/t640/team-minion-comfysole-mens-sliders-590968-1688467668-1.jpg",
      src: '#'
    },
    {
      title: "Bagpacks",
      img: "https://th.bing.com/th/id/OIP.gqDjOvAbK0v75ticG1yr5AHaKb?pid=ImgDet&w=207&h=291&c=7&dpr=1.3",
      src: '#'
    },
    {
      title: "Caps",
      img: "https://th.bing.com/th/id/OIP.tXGOwJEj-ZcTD7g1u_DSkgHaJQ?pid=ImgDet&w=198&h=247&c=7&dpr=1.3",
      src: '#'
    },
  ];
  const renderedCards = cards.map((card, index) => {
    return (
      <div className=" cursor-pointer" key={index}>
        <img
          className=" h-[200px] min-w-[150px] px-2 md:h-[300px] md:min-w-[250px] lg:h-[300px] lg:min-w-[250px] xl:h-[300px] xl:min-w-[250px]"
          src={card.img}
        />
        <h1 className=" font-poppins font-bold text-center text-lg text-[#4d4d4d] py-4">
          {card.title}
        </h1>
      </div>
    );
  });
  return (
    <div>
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
        // onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide>
          <Link to="/all-products">
            <img
              className=" h-[400px] min-w-full lg:h-[500px] xl:h-[500px]"
              src="https://images.bewakoof.com/uploads/grid/app/NovCOTM-Mickey-1x1-Graphic-1698909300.jpg"
            />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="/all-products">
            <img
              className=" h-[400px] min-w-full lg:h-[500px] xl:h-[500px]"
              src="https://images.bewakoof.com/uploads/grid/app/NEW-1x1-HeavyDuty-COMMON-Winter-1699010278.jpg"
            />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="/all-products">
            <img
              className=" h-[400px] min-w-full lg:h-[500px] xl:h-[500px]"
              src="https://images.bewakoof.com/uploads/grid/app/1X1-PARACHUTE-Offer--2--1698764946.jpg"
            />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="/all-products">
            <img
              className=" h-[400px] min-w-full lg:h-[500px] xl:h-[500px]"
              src="https://images.bewakoof.com/uploads/grid/app/NEW-1x1-PIMA-MEN-3-1699022761.jpg"
            />
          </Link>
        </SwiperSlide>
      </Swiper>
      <h1 className="font-Krala font-bold text-center text-lg sm:text-xl md:text-2xl lg:text-3xl py-3 sm:py-5">
        TRENDING CATEGORIES
      </h1>
      <div className="mx-4 md:mx-8 lg:mx-16 xl:mx-64 overflow-y-auto no-scrollbar">
        <div className="flex sm:flex-row items-center sm:justify-around my-3">
          {renderedCards}
        </div>
      </div>

      <img
        className=" w-full mb-1 min-h-[80px]"
        src="https://images.bewakoof.com/uploads/grid/app/Desktop-Strip-3-1669022420.jpg"
      />
    </div>
  );
}

export default EndingSection;
