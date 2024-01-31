import React, { useState } from "react";
import { BsBag } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectLoggedInUser } from "../features/auth/authSlice";
import { AiOutlineUser } from "react-icons/ai";
import { selectItems } from "../features/cart/cartSlice";
import { selectUserInfo } from "../features/user/userSlice";
// import { setGender } from "../features/products/ProductSlice";

function Navbar() {
  const [menu, setMenu] = useState("");
  const [userBox, setUserBox] = useState(false);

  // const user = useSelector(selectLoggedInUser);
  const user = useSelector(selectUserInfo);
  const items = useSelector(selectItems);

  return (
    <div className="fixed top-0 z-50 w-full bg-white border-b-[1px] border-gray-400">
      <div className="flex mt-1 pb-3 h-[55px] w-full items-center justify-around p-2">
        <div className="flex items-center">
          <Link to='/' className=" flex items-center">
            <img src="/logo.png" className="h-10 w-10 p-1" alt="Logo" />
            <div className="font-BungeeSpice text-4xl mt-0 pl-2 translate-y-[1px]">
              SYN
            </div>
          </Link>
          <div className="pl-20">
            <ul className="flex items-center list-none text-[#292929]">
              {
                <Link
                  to="/men-products"
                  className={`${
                    window.location.pathname === "/admin" &&
                    user.role === "admin" &&
                    "hidden"
                  }`}
                >
                  <li
                    onMouseOver={() => setMenu("men")}
                    onMouseLeave={() => setMenu("")}
                    className={`flex flex-col justify-center items-center m-3 text-lg font-Montserrat cursor-pointer duration-200 ${
                      menu === "men" && "border-b-4 border-orange-400"
                    }`}
                  >
                    MEN
                  </li>
                </Link>
              }
              <Link
                to="/women-products"
                className={`${
                  window.location.pathname === "/admin" &&
                  user.role === "admin" &&
                  "hidden"
                }`}
              >
                <li
                  onMouseOver={() => setMenu("women")}
                  onMouseLeave={() => setMenu("")}
                  className={` flex flex-col justify-center items-center m-3 text-lg font-Montserrat cursor-pointer duration-200 ${
                    menu === "women" && "border-b-4 border-orange-400"
                  }`}
                >
                  WOMEN
                </li>
              </Link>
              <Link to="/all-products">
                <li
                  onMouseOver={() => setMenu("all")}
                  onMouseLeave={() => setMenu("")}
                  className={` flex flex-col justify-center items-center m-3 text-lg font-Montserrat cursor-pointer duration-200 ${
                    menu === "all" && "border-b-4 border-orange-400"
                  }`}
                >
                  All Fashion
                </li>
              </Link>
            </ul>
          </div>
        </div>
        <div className="relative flex items-center">
          <input
            className="bg-[#e7e7e7] mr-5 rounded-md w-[250px] border-none outline-none p-2 text-[13px]"
            placeholder="Search"
          />
          <div className="bg-[#585858] h-7 w-[1px]"></div>
          <ul className="ml-4 font-poppins flex items-center">
            <li className="pr-2">
              {user === null || user.message === 'Unauthorized' ? (
                <Link to="/login">
                  <span className="text-[#4b4b4b] font-Montserrat text-md hover:text-black cursor-pointer font-bold text-sm">
                    Login
                  </span>
                </Link>
              ) : (
                <>
                  <Link to="#">
                    <span
                      onMouseOver={() => setUserBox(true)}
                      onMouseLeave={() => setUserBox(false)}
                      className="text-[#333] font-Montserrat text-md hover:text-black cursor-pointer font-bold text-sm"
                    >
                      <AiOutlineUser className=" h-7 w-7" />
                    </span>
                  </Link>
                  {userBox && (
                    <div
                      onMouseOver={() => setUserBox(true)}
                      onMouseLeave={() => setUserBox(false)}
                      className=" absolute min-w-[200px] bg-white border-[0.1px] border-[#f5f5f5] rounded-md top-0 text-sm translate-x-[-80px] translate-y-8 flex flex-col items-start font-Montserrat"
                    >
                      <div className=" bg-[#f5f5f5] py-4 px-5 w-full cursor-pointer">
                        Hi, {user.role === 'admin' ? 'Admin' : 'Shopper'}
                      </div>
                      <Link
                        to="/myaccount"
                        className=" hover:bg-[#f5f5f5] py-4 px-5 w-full cursor-pointer"
                      >
                        My Account
                      </Link>
                      <Link
                        to="/myorders"
                        className=" hover:bg-[#f5f5f5] py-4 px-5 w-full cursor-pointer"
                      >
                        My Orders
                      </Link>
                      {user.role === "admin" && (
                        <Link
                          to="/admin"
                          className=" hover:bg-[#f5f5f5] py-4 px-5 w-full cursor-pointer"
                        >
                          Admin
                        </Link>
                      )}
                      <Link
                        to='/signout'
                        className=" hover:bg-[#f5f5f5] py-4 px-5 w-full cursor-pointer"
                      >
                        Log Out
                      </Link>
                    </div>
                  )}
                </>
              )}
            </li>
            <Link to="/user-cart">
              <li className="p-1 cursor-pointer border-b-4 duration-200 border-white">
                <BsBag className="text-[26px] cursor-pointer" />
                {items.length > 0 && (
                  <span
                    className={`absolute inline-flex items-center top-4 translate-x-[14px] rounded-full bg-[#fdd835] ${
                      items.length > 9
                        ? " text-[10px] px-[2px] py-0"
                        : "text-[10px] px-[6px] py-[1px]"
                    } font-Montserrat text-black ring-1 ring-inset ring-yellow-600/20`}
                  >
                    {items.length}
                  </span>
                )}
              </li>
            </Link>
            <li className=" pl-3">
              <div>
                <img
                  className="h-[35px] w-[35px] rounded-[50%]"
                  src="https://th.bing.com/th/id/R.607b9f69862d76af04b474113c0c7ff5?rik=lfnOsbv7mhDNbQ&riu=http%3a%2f%2fupload.wikimedia.org%2fwikipedia%2fcommons%2fb%2fbc%2fFlag_of_India.png&ehk=Pk5lH0C%2fhstFahWfb15vLjtrJb3DslIU4%2fAQneo9IIM%3d&risl=&pid=ImgRaw&r=0"
                  alt="User avatar"
                />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
