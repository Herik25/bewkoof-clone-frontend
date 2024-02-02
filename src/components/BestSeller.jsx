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
  ).slice(0, 6)
  
  useEffect(() => {
    dispatch(fetchAllProductsAsync())
  }, [dispatch])

  const renderedProducts = bestSellerProducts.map((product, index) => {
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
      <div className=" flex flex-col w-full sm:flex-col md:flex-row lg:flex-row xl:flex-row">
        <img
          className=" w-full p-1 sm:w-full md:w-1/2 lg:w-1/2 xl:h-1/2 md:pb-0 lg:pb-0 xl:pb-0"
          src="https://images.bewakoof.com/uploads/grid/app/sale-midsize-desktop-banner-buy-3-at-999-1698766262.jpg"
          onClick={() => naviagate('/all-products')}
        />
        <img
          className=" w-full p-1 pl-0 sm:w-full md:w-1/2 lg:w-1/2 xl:h-1/2 md:pb-0 lg:pb-0 xl:pb-0"
          src="https://images.bewakoof.com/uploads/grid/app/desktop-mid-size-banner-air-1692257835.jpg"
          onClick={() => naviagate('/all-products')}
        />
      </div>
      <div className=" flex flex-col w-full sm:flex-col md:flex-row lg:flex-row xl:flex-row">
        <img
          className=" w-full p-1 sm:w-full md:w-1/2 lg:w-1/2 xl:h-1/2"
          src="https://images.bewakoof.com/uploads/grid/app/sale-midsize-desktop-banner-B1G1-FREE-1698766263.jpg"
          onClick={() => naviagate('/all-products')}
        />
        <img
          className=" w-full p-1 pl-0 sm:w-full md:w-1/2 lg:w-1/2 xl:h-1/2"
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
