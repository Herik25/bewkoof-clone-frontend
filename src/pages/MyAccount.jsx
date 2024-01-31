import React from "react";
import Navbar from "../navbar/Navbar";
import { BsChevronRight } from "react-icons/bs";
import { Link } from "react-router-dom";

function MyAccount() {
  return (
    <div className=" font-Montserrat">
      <Navbar />
      <div className=" mx-44 mb-20">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 pb-2 mt-24">
          My Account
        </h1>
        <div className="h-[2px] w-[100px] bg-yellow-400"></div>
      </div>
      <div className=" mx-44 flex justify-around border-b-[1px] border-b-[#979797] border-opacity-30 pb-4">
        <Link to="/myorders">
          <div className="  p-3 border-r-[1px] border-r-[#979797] border-opacity-30 max-w-[180px] cursor-pointer" >
            <div className=" flex items-center">
              <span className=" font-bold text-base">My Orders</span>
              <BsChevronRight className=" text-[#737373] ml-4" />
            </div>
            <span className=" text-xs text-[#181818] opacity-70">
              View, modify and track orders
            </span>
          </div>
        </Link>
        <div className=" p-3 border-r-[1px] border-r-[#979797] border-opacity-30 max-w-[200px] cursor-not-allowed">
          <div className=" flex items-center">
            <span className=" font-bold text-base">My Payments</span>
            <BsChevronRight className=" text-[#737373] ml-4" />
          </div>
          <span className=" text-xs text-[#181818] opacity-70">
            View and modify payment methods
          </span>
        </div>
        <div className=" p-3 border-r-[1px] border-r-[#979797] border-opacity-30 max-w-[200px] cursor-not-allowed">
          <div className=" flex items-center">
            <span className=" font-bold text-base">My Wallet</span>
            <span className=" font-bold text-xs text-[#20a437] ml-2">
              Rs. 0
            </span>
            <BsChevronRight className=" text-[#737373] ml-2" />
          </div>
          <span className=" text-xs text-[#181818] opacity-70">
            Bewakoof Wallet History and redeemed gift cards
          </span>
        </div>
        <Link to='/myaddresses'>
        <div className=" p-3 border-r-[1px] border-r-[#979797] border-opacity-30 max-w-[200px] cursor-pointer">
          <div className=" flex items-center">
            <span className=" font-bold text-base">My Addresses</span>
            <BsChevronRight className=" text-[#737373] ml-4" />
          </div>
          <span className=" text-xs text-[#181818] opacity-70">
            Edit, add or remove addresses
          </span>
        </div>
        </Link>
        <Link to='/myprofile'>
        <div className=" p-3 border-opacity-30 max-w-[200px] cursor-pointer">
          <div className=" flex items-center">
            <span className=" font-bold text-base">My profile</span>
            <BsChevronRight className=" text-[#737373] ml-4" />
          </div>
          <span className=" text-xs text-[#181818] opacity-70">
            Edit personal info, change password
          </span>
        </div>
        </Link>
      </div>
      <div className=" flex items-center mx-44 py-28">
        <div className="max-w-[350px]">
          <div className=" text-xl font-bold opacity-90 text-[#747474]">
            Buy something to get personalised recommendations.
          </div>
          <div className=" mt-10 text-white font-Montserrat text-sm font-bold ">
            <Link
              to="/"
              className=" rounded-sm border-[1px] border-[#51cccc] px-4 py-2 bg-white text-[#51cccc]"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
        <div className=" ml-8">
          <img
            src="https://images.bewakoof.com/web/empty-account-1530180452.png"
            alt="recomendation"
          />
        </div>
      </div>
    </div>
  );
}

export default MyAccount;
