import React, { useEffect } from "react";
import { FiHeart } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { fetchAllProductsAsync, selectAllProducts } from "../features/products/ProductSlice";

function BestSeller() {
 
  const dispatch = useDispatch()
  const products = useSelector(selectAllProducts);
  const bestSellerProducts = products.filter(
    (product) => product.bestseller === true
  )
  const shuffleBestSeller = bestSellerProducts.sort(() => Math.random() - 0.5).slice(0, 6)
  
  useEffect(() => {
    dispatch(fetchAllProductsAsync())
  }, [dispatch])

  const renderedProducts = shuffleBestSeller.map((product, index) => {
    return (
      <Link
        key={index}
        className="bg-white h-[350px] w-full sm:w-[200px] md:w-[250px] rounded-lg border mx-3"
        to={`/all-products/productdetail/${product.id}`}
      >
        <img
          className="w-full h-[250px] object-cover rounded-t-lg"
          src={product.thumbnail}
          alt="img"
        />
        <div className="flex flex-col font-poppins p-2">
          <div className="flex justify-between items-center">
            <div className="font-bold text-sm text-[#444]">
              Bewakoof®
            </div>
            <div className="pr-2 text-lg text-[#333]">
              <FiHeart />
            </div>
          </div>
          <div className="text-sm md:text-[10px] text-[#444] max-w-[160px] whitespace-nowrap overflow-hidden text-ellipsis pb-2">
            {product.name}
          </div>
          <div className="flex items-center">
            <div className="font-Krala text-lg text-[#333] pr-2">
              ₹<span className="font-bold">{product.price}</span>
            </div>
            <div className="line-through text-sm text-[#888] pr-2 font-Krala">
              ₹<span>{product.discountPrice}</span>
            </div>
            <div className="text-green-400 text-sm font-bold">
              {product.discount}% OFF
            </div>
          </div>
        </div>
      </Link>
    );
  });

  const naviagate = useNavigate()

  return (
    <div>
      <h1 className="font-Krala font-bold text-center text-lg sm:text-xl md:text-2xl lg:text-3xl py-3 sm:py-5">
        OUR BEST PICKS
      </h1>
      <div className=" grid grid-cols-1 md:gap-1 w-full md:grid-cols-2">
        <img
          className=" w-full  mb-1 rounded-2xl px-2 md:rounded-none md:px-0"
          src="https://images.bewakoof.com/uploads/grid/app/Bestsellers-Common-Desktop-midsize-Banner--1--1706852855.jpg"
          onClick={() => naviagate('/all-products')}
        />
        <img
          className=" w-full mb-1 rounded-2xl px-2 md:rounded-none md:px-0"
          src="https://images.bewakoof.com/uploads/grid/app/boyfriend-t-shirt-midsize-Desktop-banner-1707041553.jpg"
          onClick={() => naviagate('/women-tshirts')}
        />
      </div>
      <div className=" grid grid-cols-1 md:gap-1 w-full md:grid-cols-2">
        <img
          className=" w-full mb-1 rounded-2xl px-2 md:rounded-none md:px-0"
          src="https://images.bewakoof.com/uploads/grid/app/720x420-Midsize-bannner-Combos--1--1704012294.jpg"
          onClick={() => naviagate('/all-products')}
        />
        <img
          className=" w-full  mb-1 rounded-2xl px-2 md:rounded-none md:px-0"
          src="https://images.bewakoof.com/uploads/grid/app/mid-size-hygiene-revamp-customise-model-desktop-new-1689142924.jpg"
          onClick={() => naviagate('/all-products')}
        />
      </div>
      <h1 className="font-Krala font-bold text-center text-lg sm:text-xl md:text-2xl lg:text-3xl py-3 sm:py-5">
        BESTSELLERS
      </h1>
      <div className=" overflow-y-auto no-scrollbar flex justify-start items-center bg-[#fbf5ff] w-full h-[400px] p-5">
        {renderedProducts}
      </div>
    </div>
  );
}

export default BestSeller;
