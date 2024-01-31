import React from "react";

function SkeletonLoaderCart() {
  return (
    <div className=" flex mt-5">
      <div className=" w-full py-4">
        <div className="p-4 w-full min-h-[200px] bg-white mb-5 rounded-md flex justify-center items-center shadow-md border-[1px] border-gray-100">
          <div className=" basis-3/4">
            <div className=" h-5 mb-4 rounded-sm bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 animate-gradient-shine w-[95%]"></div>
            <div className="h-5 mb-4 rounded-sm bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 animate-gradient-shine w-[95%]"></div>
            <div className=" h-5 mb-4 rounded-sm bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 animate-gradient-shine w-[95%]"></div>
            <div className="h-5 mb-4 rounded-sm bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 animate-gradient-shine w-[95%]"></div>
          </div>
          <div className=" flex-1">
            <div className=" h-[150px] rounded-md mb-4 bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 animate-gradient-shine"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SkeletonLoaderCart;
