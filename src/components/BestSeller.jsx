import React from "react";
import { FiHeart } from "react-icons/fi";

function BestSeller() {
  const products = [
    {
      desc: "Women's Cute Bunny OverSize T-shirt",
      price: "1100",
      discount: "40",
      img: "https://images.bewakoof.com/t320/women-s-purple-fairytale-bunny-graphic-printed-oversized-t-shirt-519259-1694765992-1.jpg",
    },
    {
      desc: "Men's Black I Need Some Space Teddy Graphic Printed T-shirt",
      price: "999",
      discount: "60",
      img: "https://images.bewakoof.com/t1080/men-s-black-i-need-some-space-teddy-graphic-printed-t-shirt-496045-1694763737-1.jpg",
    },
    {
      desc: "Women's White Avoiding Responsibilities Graphic Printed Boyfriend T-shirt",
      price: "1099",
      discount: "65",
      img: "https://images.bewakoof.com/t1080/women-s-white-avoiding-responsibilities-graphic-printed-boyfriend-t-shirt-585772-1682403802-1.jpg",
    },
    {
      desc: "Men's Black Oversized T-shirt",
      price: "799",
      discount: "31",
      img: "https://images.bewakoof.com/t1080/men-s-black-oversized-t-shirt-439421-1679048737-1.jpg",
    },
    {
      desc: "Women's Black Chibi Naruto Graphic Printed Oversized Short Top",
      price: "1449",
      discount: "58",
      img: "https://images.bewakoof.com/t1080/women-s-black-chibi-naruto-graphic-printed-oversized-short-top-603169-1697543032-1.jpg",
    },
    {
      desc: "Women's Black Don't Even Trip Dawg Graphic Printed Oversized Short Top",
      price: "1449",
      discount: "62",
      img: "https://images.bewakoof.com/t1080/women-don-t-even-trip-dawg-oversize-graphic-printed-top-605121-1693306771-3.jpg",
    },
  ];

    const renderedProducts = products.map((product, index) => {
    return (
      <div key={index} className=" bg-white h-[335px] w-[200px] rounded-lg border">
        <img
          src={product.img}
          alt="img"
        />
        <div className=" flex flex-col font-poppins p-1 pt-2">
          <div className=" flex justify-between">
            <div className=" font-bold text-sm text-[#444] pb-[2px]">
              Bewakoof®
            </div>
            <div className=" pr-2 text-lg text-[#333]">
              <FiHeart />
            </div>
          </div>
          <div className=" text-[10px] text-[#444] max-w-[160px] whitespace-nowrap overflow-hidden text-ellipsis pb-[2px]">
            {product.desc}
          </div>
          <div className=" flex items-center">
            <div className=" font-Krala text-lg text-[#333] pr-2">
              ₹<span className=" font-bold">{product.price}</span>
            </div>
            <div className=" line-through text-sm text-[#888] pr-2 font-Krala">
              ₹<span>{product.discountPrice}</span>
            </div>
            <div className=" text-green-400 text-sm font-bold">{product.discount}% OFF</div>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div>
      <h1 className=" font-Krala font-bold text-center text-2xl py-5">
        OUR BEST PICKS
      </h1>
      <div className=" flex w-full">
        <img
          className=" w-[50%] p-1 pb-0"
          src="https://images.bewakoof.com/uploads/grid/app/sale-midsize-desktop-banner-buy-3-at-999-1698766262.jpg"
        />
        <img
          className=" w-[50%] p-1 pl-0 pb-0"
          src="https://images.bewakoof.com/uploads/grid/app/desktop-mid-size-banner-air-1692257835.jpg"
        />
      </div>
      <div className=" flex w-full">
        <img
          className=" w-[50%] p-1"
          src="https://images.bewakoof.com/uploads/grid/app/sale-midsize-desktop-banner-B1G1-FREE-1698766263.jpg"
        />
        <img
          className=" w-[50%] p-1 pl-0"
          src="https://images.bewakoof.com/uploads/grid/app/mid-size-hygiene-revamp-customise-model-desktop-new-1689142924.jpg"
        />
      </div>
      <h1 className=" font-Krala font-bold text-center text-2xl py-5 bg-[#fbf5ff]">
        BESTSELLERS
      </h1>
      <div className=" flex justify-around bg-[#fbf5ff] w-full h-[400px] p-5">
        {renderedProducts}
      </div>
    </div>
  );
}

export default BestSeller;
