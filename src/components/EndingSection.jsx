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
      img: "https://www.layers.shop/cdn/shop/products/iPhone_15_Pro_Cyberhud.jpg?v=1695820507&width=1080",
      src: "#",
    },
    {
      title: "Sliders",
      img: "https://images.bewakoof.com/t640/team-minion-comfysole-mens-sliders-590968-1688467668-1.jpg",
      src: "#",
    },
    {
      title: "Bagpacks",
      img: "https://th.bing.com/th/id/OIP.gqDjOvAbK0v75ticG1yr5AHaKb?pid=ImgDet&w=207&h=291&c=7&dpr=1.3",
      src: "#",
    },
    {
      title: "Caps",
      img: "https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F5d%2F95%2F5d95ecc3da1e78f79def7968eab5845d307fa68b.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_accessories_hatscaps_caps%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D",
      src: "#",
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
              src="https://images.bewakoof.com/uploads/grid/app/Print-Co-ords-Common-1x1-Banner-1707041109.jpg"
            />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="/all-products">
            <img
              className=" h-[400px] min-w-full lg:h-[500px] xl:h-[500px]"
              src="https://images.bewakoof.com/uploads/grid/app/Classic-Fit-Tshirt-1x1-Banner--1--1706852980.jpg"
            />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="/all-products">
            <img
              className=" h-[400px] min-w-full lg:h-[500px] xl:h-[500px]"
              src="https://images.bewakoof.com/uploads/grid/app/Dresses-RM-1X1-Banner--2--1706710117.jpg"
            />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="/all-products">
            <img
              className=" h-[400px] min-w-full lg:h-[500px] xl:h-[500px]"
              src="https://images.bewakoof.com/uploads/grid/app/Shorts-HC-banner-1x1-1707041769.jpg"
            />
          </Link>
        </SwiperSlide>
      </Swiper>
      <h1 className="font-Krala font-bold text-center text-lg sm:text-xl md:text-2xl lg:text-3xl py-3 sm:py-5">
        TRENDING CATEGORIES
      </h1>
      {isMobile ? (
        <>
          <div className=" grid grid-cols-2 px-2 gap-2">
            <img
              className=" max-h-[150px] rounded-xl"
              src="https://images.bewakoof.com/uploads/grid/app/Trending-Categories-Tile-Mobile-Covers-1699595363.jpg"
              alt="mobileCovers"
            />
            <img
              className=" max-h-[150px] rounded-xl"
              src="https://images.bewakoof.com/uploads/grid/app/Trending-Categories-Tile-Sliders-1699595362.jpg"
              alt="sliders"
            />
          </div>
          <div className=" grid grid-cols-2 px-2 gap-2 my-2">
            <img
              className=" max-h-[150px] rounded-xl"
              src="https://images.bewakoof.com/uploads/grid/app/Trending-Categories-Tile-Backpacks-1699595364.jpg"
              alt="bagpacks"
            />
            <img
              className=" max-h-[150px] rounded-xl"
              src="https://images.bewakoof.com/uploads/grid/app/Trending-Categories-Tile-Caps-1699595363.jpg"
              alt="caps"
            />
          </div>
        </>
      ) : (
        <div className="mx-4 md:mx-8 lg:mx-16 xl:mx-40 overflow-y-auto no-scrollbar">
          <div className="flex sm:flex-row items-center sm:justify-start lg:justify-center my-3">
            {renderedCards}
          </div>
        </div>
      )}
      {isMobile ? (
        <img
          className=" w-full mb-1 min-h-[80px] px-2 my-4 pb-2 rounded-2xl"
          src="https://images.bewakoof.com/uploads/grid/app/new-2023-strip-vote-1699505190.jpg"
        />
      ) : (
        <img
          className=" w-full mb-1 min-h-[80px]"
          src="https://images.bewakoof.com/uploads/grid/app/Desktop-Strip-3-1669022420.jpg"
        />
      )}
    </div>
  );
}

export default EndingSection;
