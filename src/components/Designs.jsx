import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Designs() {
  const navigate = useNavigate();

  return (
    <div>
      <h1 className="font-Krala font-bold text-center text-lg sm:text-xl md:text-2xl lg:text-3xl py-3 sm:py-5">
        Designs of the Week
      </h1>
      <div className=" flex w-full">
        <img
          onClick={() => navigate("men-products")}
          className=" w-[50%] cursor-pointer"
          src="https://images.bewakoof.com/uploads/grid/app/DOTW-Split-banner-Desktop-Men--4--1698728259.jpg"
        />
        <img
          onClick={() => navigate("women-products")}
          className=" w-[50%] cursor-pointer"
          src="https://images.bewakoof.com/uploads/grid/app/DOTW-Split-banner-Desktop-Women--4--1698728259.jpg"
        />
      </div>
      <img
        className=" w-full"
        src="https://images.bewakoof.com/uploads/grid/app/Blockbuster-flat-70-Off-desktop-deal-banner-1699032711.jpg"
      />
    </div>
  );
}

export default Designs;
