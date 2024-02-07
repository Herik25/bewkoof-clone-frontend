import React from "react";

function SkeletonLoaderOrders() {
  return (
    <div>
      <div className="my-12 mx-2 md:mx-8 lg:mx-32 xl:mx-48">
        <div className="flex flex-col bg-[#fffbfb] border-[1px] pt-6 px-8 border-[#fcf6f6] shadow-md rounded-md">
          <div className=" flex justify-between pb-8 pt-4 border-b-[1px] border-b-[#ccc]">
            <div className=" bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 min-w-[150px] py-2 px-4 rounded-full font-bold animate-gradient-shine"></div>

            {/* <div className=" flex items-center bg-[#51cccc] py-2 px-4 rounded-full font-bold">
              <span className=" text-white font-bold ml-2">Track Order</span>
            </div> */}
            <div className=" bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 min-h-[40px] min-w-[150px] py-2 px-4 rounded-full font-bold animate-gradient-shine"></div>
          </div>

          <div className=" flex flex-col md:flex-row justify-between py-5 border-b-[1px] border-b-[#ccc]">
            <div className=" flex">
              <div className=" h-28 min-w-[96px] bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 rounded-md mr-4 animate-gradient-shine"></div>
              <div className=" flex flex-col">
                <span className="text-sm text-[#444] max-w-[200px] whitespace-nowrap overflow-hidden text-ellipsis mb-2"></span>
                <span className=" text-xs text-[#444] font-bold"></span>
                <div className=" flex mt-8 text-[#737373] text-md">
                  <div className=" h-8 w-36 bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 rounded-md animate-gradient-shine"></div>
                </div>
              </div>
            </div>
            <div className=" hidden  md:flex flex-col justify-center text-center">
              <div className=" h-8 w-24 bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 rounded-md animate-gradient-shine"></div>
            </div>
            <div className=" hidden  md:flex flex-col justify-center">
              <div className=" h-8 w-36 bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 rounded-md animate-gradient-shine"></div>
              <div className=" text-green-500 font-bold text-xl font-poppins"></div>
            </div>
          </div>

          <div className=" flex items-center justify-between">
            <div className=" flex items-center">
              <div className=" flex items-center text-[#727272] font-bold px-2 sm:px-4 md:px-8 lg:px-12 xl:px-16 py-4 border-r-[1px] border-r-[#ccc] cursor-pointer">
              <div className=" h-5  w-20 bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 rounded-md animate-gradient-shine"></div>
              </div>
              <div className=" hidden md:block ml-4 h-3 w-24 bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 rounded-md animate-gradient-shine"></div>
            </div>
            <div className=" text-[#444] font-black font-Krala text-xl">
                <div className=" h-6  w-28 bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 rounded-md animate-gradient-shine"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SkeletonLoaderOrders;
