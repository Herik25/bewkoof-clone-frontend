import React, { useEffect, useRef, useState } from "react";
import {
  BsChevronDoubleRight,
  BsChevronDown,
  BsChevronRight,
} from "react-icons/bs";
import AddressForm from "./AddressForm";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteItemFromTheCartAsycn,
  selectCartStatus,
  selectItems,
  updateCartAsync,
} from "../features/cart/cartSlice";
import { selectUserInfo } from "../features/user/userSlice";
import SkeletonLoaderCart from "./SkeletonLoaderCart";
import { ArrowLeftIcon, HomeIcon } from "@heroicons/react/24/outline";

function CartSection() {
  const [open, setOpen] = useState(false);
  const [isAddress, setAddress] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const dispatch = useDispatch();
  const reference = useRef(null);
  const navigate = useNavigate();
  const user = useSelector(selectUserInfo);
  const items = useSelector(selectItems);
  const cartStatus = useSelector(selectCartStatus);

  const totalPrice = items.reduce(
    (amount, item) => item.product?.price * item?.quantity + amount,
    0
  );
  const discountPrice = items.reduce(
    (amount, item) => item.product?.discountPrice * item?.quantity + amount,
    0
  );
  const totalItems = items.reduce((total, item) => item?.quantity + total, 0);
  const discount = discountPrice - totalPrice;

  useEffect(() => {
    if (user && user?.addresses && user.addresses?.length > 0) {
      setAddress(true);
    } else {
      setAddress(false);
    }
  }, [user]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767); // Adjust the breakpoint as needed
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // check to see mobilescreen

  const handleSize = (e, item) => {
    e.preventDefault();
    dispatch(updateCartAsync({ id: item.id, selectedSize: e.target.value }));
  };

  const handleQuantity = (e, item) => {
    e.preventDefault();
    dispatch(updateCartAsync({ id: item.id, quantity: +e.target.value }));
  };

  const handleRemove = (e, id) => {
    e.preventDefault();
    dispatch(deleteItemFromTheCartAsycn(id));
  };

  const scrollToPriceSection = () => {
    reference.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {items.length > 0 ? (
        <div className=" h-screen flex flex-col justify-between">
          <div>
            <AddressForm open={open} setOpen={setOpen} />
            {isMobile ? (
              <div className=" flex justify-between items-center h-16 bg-white border-b-[2px] border-b-[#f0f0f0] ">
                <div className=" flex items-center ml-2">
                  <div
                    onClick={() => navigate(-1)}
                    className=" p-3 border-[2px] border-[#f0f0f0] rounded-lg shadow cursor-pointer transition ease-in duration-200 hover:shadow-none hover:text-gray-600"
                  >
                    <ArrowLeftIcon className=" h-5 w-5" />
                  </div>
                  <span className=" ml-2 text-xl text-[#333] font-Montserrat ">
                    Cart
                  </span>
                </div>
                <Link to="/" className=" mr-2">
                  <img src="/logo.png" className="h-11 w-11 p-1" alt="Logo" />
                </Link>
              </div>
            ) : (
              <div className="flex mt-1 pb-3 h-12 w-full items-center justify-between p-2 border-b-[1px] border-[#ccc]">
                <Link to="/" className=" flex items-center lg:ml-44">
                  <img src="/logo.png" className="h-10 w-10 p-1" alt="Logo" />
                  <div className="font-BungeeSpice text-2xl mt-0 pl-2 translate-y-[1px] lg:text-4xl">
                    SYN
                  </div>
                </Link>
                <div className=" flex flex-col items-start lg:mr-44">
                  <div className=" text-[10px] font-Montserrat font-bold text-[#333] opacity-50">
                    Signed as
                  </div>
                  <div className="text-md font-karala font-semibold text-[#333]">
                    {user?.email}
                  </div>
                </div>
              </div>
            )}
            <div className=" flex flex-col mt-2 mx-2 lg:mx-48 ">
              <div className=" my-7 text-base text-[#181818] pl-1">
                <span className=" font-bold">My Bag </span>
                <span>
                  {totalItems} Item{totalItems === 1 ? "" : "s"}
                </span>
              </div>
              <div>
                <div className=" grid grid-cols-1 md:grid-cols-[3fr_2fr]">
                  <div className=" flex flex-col w-full">
                    <div className=" flex items-center h-[50px] p-4 rounded-md bg-[#fcfeee]">
                      <img
                        src="https://images.bewakoof.com/web/Red-truck.png"
                        alt="truck"
                        className=" h-[12px] mr-2"
                      />
                      <span className=" font-poppins text-[13px] text-black">
                        Yay! You get FREE delivery on this order
                      </span>
                    </div>
                    {cartStatus === "loading" ? (
                      <SkeletonLoaderCart />
                    ) : (
                      <div>
                        {items.map((item) => {
                          return (
                            <div
                              key={item.id}
                              className=" mt-5 border-[1px] border-[#ccc] rounded-md font-Montserrat"
                            >
                              <div className=" flex justify-between px-4 py-4">
                                <div>
                                  <div className=" text-[14px] text-black opacity-70 ">
                                    {item.product?.name}
                                  </div>
                                  <div>
                                    <span className=" font-Krala text-lg">
                                      ₹
                                    </span>
                                    <span className=" text-lg font-bold mr-2">
                                      {item.product?.price}
                                    </span>
                                    <span className=" text-sm text-[#888] line-through">
                                      <span className=" font-Krala">₹</span>
                                      {item.product?.discountPrice}
                                    </span>
                                  </div>
                                  <div className=" text-[#1d8802] text-sm font-bold">
                                    You saved{" "}
                                    <span className=" font-Krala">₹</span>
                                    {item.product?.discountPrice -
                                      item.product?.price}
                                    !
                                  </div>
                                  <div className=" flex">
                                    <div className=" flex items-center border-[1px] border-[#ccc] rounded-md mt-4 px-2 text-xs font-Montserrat mr-4">
                                      <span>Size :</span>
                                      <select
                                        defaultValue={item?.selectedSize}
                                        onChange={(e) => handleSize(e, item)}
                                        className=" pl-2 pr-6 text-sm text-black font-bold border-none ring-0 outline-0 focus:ring-0 focus:border-0 focus:outline-none"
                                      >
                                        <option value="S">S</option>
                                        <option value="M">M</option>
                                        <option value="L">L</option>
                                        <option value="XL">XL</option>
                                        <option value="2XL">2XL</option>
                                        <option value="3XL">3XL</option>
                                      </select>
                                    </div>
                                    <div className=" flex items-center border-[1px] border-[#ccc] rounded-md mt-4 px-2 text-xs font-Montserrat mr-4">
                                      <span>Qty :</span>
                                      <select
                                        value={item?.quantity}
                                        onChange={(e) =>
                                          handleQuantity(e, item)
                                        }
                                        className=" pl-2 pr-6 text-sm text-black font-bold border-none ring-0 outline-0 focus:ring-0 focus:border-0 focus:outline-none"
                                      >
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        <option value="6">6</option>
                                        <option value="7">7</option>
                                        <option value="8">8</option>
                                        <option value="9">9</option>
                                        <option value="10">10</option>
                                      </select>
                                    </div>
                                  </div>
                                </div>
                                <div className=" min-w-[90px]">
                                  <img
                                    src={item.product?.thumbnail}
                                    alt="image"
                                    className=" h-[150px] w-full rounded-md"
                                  />
                                </div>
                              </div>
                              <div className=" flex gap-3 w-full border-t-[2px] border-[#f5f5f5] text-black font-Montserrat text-sm">
                                <div
                                  onClick={(e) => handleRemove(e, item.id)}
                                  className=" w-full"
                                >
                                  <button className=" w-full py-4 border-r-[2px] border-[#f5f5f5]">
                                    <span className=" opacity-50">Remove</span>
                                  </button>
                                </div>
                                <Link
                                  to="/"
                                  className=" w-full py-4 text-center"
                                >
                                  <span className=" opacity-50">
                                    Go back to home
                                  </span>
                                </Link>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>
                  <div className=" flex flex-col mb-4 w-full mt-4 md:mt-0 md:mx-4">
                    <div className=" flex items-center justify-between bg-[#fdd835] h-[50px] rounded-md p-4">
                      <span className=" font-Montserrat text-[14px]">
                        Save extra{" "}
                        <span className=" font-bold">
                          <span className=" font-Krala">₹</span>60
                        </span>{" "}
                        with <span className=" font-bold">TriBe</span>
                      </span>
                      <div className=" flex">
                        <span className=" animate-ping text-[11px]">
                          <BsChevronRight />
                        </span>
                        <span className=" animate-ping text-[11px]">
                          <BsChevronRight />
                        </span>
                        <span className=" animate-ping text-[11px]">
                          <BsChevronRight />
                        </span>
                      </div>
                    </div>
                    <div className=" border-b-[#ccc] border-[1px] p-2 mt-3 ">
                      <div className=" flex items-center justify-between h-9 bg-[#42a2a11a] rounded-md px-2">
                        <span className=" font-Montserrat text-[#42a2a2] text-[12px] ">
                          Apply Coupon / Gift Card / Referral
                        </span>
                        <div className=" flex items-center">
                          <span className=" font-Krala font-bold text-[#42a2a2] text-[14px] mr-1">
                            Redeem
                          </span>
                          <BsChevronDoubleRight className=" text-[12px] text-[#42a2a2] font-bold" />
                        </div>
                      </div>
                    </div>
                    <div
                      ref={reference}
                      className=" flex flex-col border-[1px] border-[#ccc]"
                    >
                      <div className=" flex items-center bg-[#ebebeb] py-3 px-5">
                        <span className=" font-Montserrat font-bold text-[11px]">
                          PRICE SUMMARY
                        </span>
                      </div>
                      <div className=" flex justify-between p-3 font-poppins text-[13px] text-[#292d35]">
                        <div className=" flex flex-col justify-between min-h-[100px]">
                          <span>Total MRP (Incl. of taxes) </span>
                          <span>Shipping Charges </span>
                          <span>Bag Discount </span>
                          <span className=" font-bold">Subtotal </span>
                        </div>
                        <div className=" flex flex-col justify-between min-h-[100px] ">
                          <span>
                            <span className=" font-Krala">₹</span>
                            {discountPrice}
                          </span>
                          <span className=" text-[#1d8802]">FREE</span>
                          <span className=" translate-x-[-7px] ">
                            -<span className=" font-Krala">₹</span>
                            {discount}
                          </span>
                          <span className=" font-bold">
                            <span className=" font-Krala">₹</span>
                            {totalPrice}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className=" border-b-[#ccc] border-[1px] border-t-0 p-2">
                      {isMobile ? (
                        <div className=" fixed bottom-0 left-0 bg-white grid grid-cols-[2fr_3fr] items-center w-full m-0 pr-3 pl-5 pt-3 pb-2">
                          <div className=" flex flex-col">
                            <span className=" text-[16px] font-Montserrat font-bold">
                              <span className=" font-Krala">₹</span>
                              {totalPrice}
                            </span>
                            <span
                              onClick={scrollToPriceSection}
                              className=" text-[12px] font-Montserrat text-[#207bb4] font-bold"
                            >
                              View Detail
                            </span>
                          </div>
                          <div className=" w-full h-full">
                            {isAddress ? (
                              <Link to="/checkout">
                                <div className=" w-full text-center text-white font-Montserrat text-base font-bold rounded-md px-3 py-2 bg-[#42a2a2]">
                                  PROCEED
                                </div>
                              </Link>
                            ) : (
                              <button
                                onClick={() => setOpen(true)}
                                className=" w-full text-white font-Montserrat text-base font-bold rounded-md px-3 py-2 bg-[#42a2a2]"
                              >
                                ADD ADDRESS
                              </button>
                            )}
                          </div>
                          <div></div>
                        </div>
                      ) : (
                        <div className=" grid grid-cols-[2fr_3fr] items-center w-full px-5">
                          <div className=" flex flex-col">
                            <span className=" text-[12px] font-Montserrat">
                              Total
                            </span>
                            <span className=" text-[16px] font-Montserrat font-bold">
                              <span className=" font-Krala">₹</span>
                              {totalPrice}
                            </span>
                          </div>
                          <div className=" w-full h-full">
                            {isAddress ? (
                              <Link to="/checkout">
                                <div className=" w-full text-center text-white font-Montserrat text-base font-bold rounded-md px-3 py-2 bg-[#42a2a2]">
                                  Continue
                                </div>
                              </Link>
                            ) : (
                              <button
                                onClick={() => setOpen(true)}
                                className=" w-full text-white font-Montserrat text-base font-bold rounded-md px-3 py-2 bg-[#42a2a2]"
                              >
                                ADD ADDRESS
                              </button>
                            )}
                          </div>
                          <div></div>
                        </div>
                      )}
                      <div className=" my-4 w-full flex items-center justify-between px-4">
                        <div className=" flex flex-col items-center">
                          <img
                            className=" h-12 w-12"
                            src="https://images.bewakoof.com/web/cart-badge-trust.svg"
                            alt="imgPolicies"
                          />
                          <span className=" font-Montserrat text-[8px] text-center mt-1 text-[#878787]">
                            100% SECURE PAYMENTS
                          </span>
                        </div>
                        <div className=" flex flex-col items-center max-w-[80px]">
                          <img
                            className=" h-12 w-12"
                            src="https://images.bewakoof.com/web/cart-easy-return.svg"
                            alt="imgPolicies"
                          />
                          <span className=" font-Montserrat text-[8px] text-center mt-1 text-[#878787]">
                            EASY RETURNS & INSTANT REFUNDS
                          </span>
                        </div>
                        <div className=" flex flex-col items-center max-w-[80px]">
                          <img
                            className=" h-12 w-12"
                            src="https://images.bewakoof.com/web/quality-check.svg"
                            alt="imgPolicies"
                          />
                          <span className=" font-Montserrat text-[8px] text-center mt-1 text-[#878787]">
                            QUALITY ASSURANCE
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className=" h-[100px] w-full bg-white md:hidden"></div>
          </div>
          <div className=" flex justify-center">
            <img
              src="https://images.bewakoof.com/web/secure-payments-image.png"
              alt="cards"
              className=" h-6"
            />
          </div>
        </div>
      ) : (
        <div className="h-screen w-full overflow-hidden">
          <div className="h-[95%]">
            <div className=" flex justify-between items-center h-16 bg-white border-b-[2px] border-b-[#f0f0f0] ">
              <div className=" flex items-center ml-2">
                <div
                  onClick={() => navigate(-1)}
                  className=" p-3 border-[2px] border-[#f0f0f0] rounded-lg shadow cursor-pointer transition ease-in duration-200 hover:shadow-none hover:text-gray-600"
                >
                  <ArrowLeftIcon className=" h-5 w-5" />
                </div>
                <span className=" ml-2 text-xl text-[#333] font-Montserrat ">
                  Cart
                </span>
              </div>
              <Link to="/" className=" mr-2">
                <img src="/logo.png" className="h-11 w-11 p-1" alt="Logo" />
              </Link>
            </div>
            <div className=" flex flex-col items-center mt-2 w-full py-5 font-Montserrat">
              <div className="">
                <img
                  src="https://images.bewakoof.com/images/doodles/empty-cart-page-doodle.png"
                  alt="bag"
                  className=" h-[180px] w-[150px]"
                />
              </div>
              <div className="text-lg ">Nothing in the bag</div>
              <Link to="/all-products" className="mx-auto">
                <div className=" border-[2px] border-[#51cccc] text-[#51cccc] text-lg font-bold rounded-md px-3 py-2 mt-3">
                  Continue Shopping
                </div>
              </Link>
              <div className=" h-[1px] w-[400px] bg-[#ccc] text-center mt-7 mb-5"></div>
              <div className=" text-sm mb-5">
                You could try one of these categories:
              </div>
              <div className=" flex text-sm mb-5">
                <span className=" mr-10">Men</span>
                <Link to="/all-products" className=" text-[#51cccc] underline">
                  Products
                </Link>
              </div>
              <div className=" flex text-sm">
                <span className=" mr-10">Women</span>
                <Link to="/all-products" className=" text-[#51cccc] underline">
                  Products
                </Link>
              </div>
            </div>
          </div>
          <div className=" flex justify-center">
            <img
              src="https://images.bewakoof.com/web/secure-payments-image.png"
              alt="cards"
              className=" h-6"
            />
          </div>
        </div>
      )}
    </>
  );
}

export default CartSection;
