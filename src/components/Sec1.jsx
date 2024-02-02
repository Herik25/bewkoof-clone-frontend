import React from "react";
import { Link } from "react-router-dom";

function Sec1() {
  const names = [
    {
      name: "New Arrivals",
      image:
        "https://images.bewakoof.com/uploads/grid/app/category-icon-for-Desktop--1--1697613232.jpg",
    },
    {
      name: "Bestsellers",
      image:
        "https://images.bewakoof.com/uploads/grid/app/category-icon-for-msite-Desktop-1697613234.jpg",
    },
    {
      name: "Official Collaborations",
      image:
        "https://images.bewakoof.com/uploads/grid/app/category-icon-for-Desktop---1--1697613231.jpg",
    },
    {
      name: "Winterwear",
      image:
        "https://images.bewakoof.com/uploads/grid/app/category-icon-for-Desktop-Winterwear-1698217139.jpg",
    },
    {
      name: "Customization",
      image:
        "https://images.bewakoof.com/uploads/grid/app/thumbnails-Revamp-Customization--1--1693212866.jpg",
    },
    {
      name: "Combos",
      image:
        "https://images.bewakoof.com/uploads/grid/app/thumbnails-Revamp-Combos-1693212865.gif",
    },
    {
      name: "Vote for Designs",
      image:
        "https://images.bewakoof.com/uploads/grid/app/thumbnails-Revamp-Vote-1693212866.jpg",
    },
    {
      name: "Last Siezes Left",
      image:
        "https://images.bewakoof.com/uploads/grid/app/last-size-new-thumbnaik-1668508337.jpg",
    },
  ];

  const renderedCards = names.map((item, index) => {
    return (
      <Link to='/all-products' key={index}>
        <img className=" px-3 h-[180px] min-w-[150px]" src={item.image} />
        <h1 className=" text-center text-[12px] font-bold mt-3 font-poppins">
          {item.name}
        </h1>
      </Link>
    );
  });
  return (
    <div>
      <div className=" overflow-y-auto no-scrollbar mx-0 sm:mx-8 md:mx-16 lg:mx-20 my-5">
        <div className="flex items-center justify-start flex-nowrap md:justify-center lg:justify-center">
          {renderedCards}
        </div>
      </div>
      <div>
        <img
          className="w-full h-24 sm:h-24 md:h-32 lg:h-48 xl:h-56"
          src="https://images.bewakoof.com/uploads/grid/app/brand-strip-1683780891-1684740361.gif"
        />
      </div>
    </div>
  );
}

export default Sec1;
