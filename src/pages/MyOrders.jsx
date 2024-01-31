import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchLoggedInUserOrdersAsync,
  selectOrderStatus,
  selectUserOrders,
} from "../features/user/userSlice";
import { selectLoggedInUser } from "../features/auth/authSlice";
import Navbar from "../navbar/Navbar";
import { Link } from "react-router-dom";
import { LiaCrosshairsSolid } from "react-icons/lia";
import { XMarkIcon } from "@heroicons/react/24/outline";
import CancleOrderModal from "../components/CancleOrderModal";
import SkeletonLoaderOrders from "../components/SkeletonLoaderOrders";

function MyOrders() {
  const [open, setOpen] = useState(false);
  const [orderId, setOrderId] = useState(null);

  const dispatch = useDispatch();
  const user = useSelector(selectLoggedInUser);
  const orders = useSelector(selectUserOrders);
  const orderStatus = useSelector(selectOrderStatus);
  // console.log(orderStatus);

  useEffect(() => {
    dispatch(fetchLoggedInUserOrdersAsync());
  }, [dispatch, open]);

  const handleRemoveOrder = (order) => {
    setOpen(!open);
    setOrderId(order.id);
  };

  return (
    <div className=" font-Montserrat">
      <Navbar />
      <div className=" mx-44">
        {open && (
          <CancleOrderModal open={open} setOpen={setOpen} orderId={orderId} />
        )}
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 pb-2 mt-20">
          My Orders
        </h1>
        <div className="h-[2px] w-[100px] bg-yellow-400"></div>
      </div>
      {orders.length !== 0 ? (
        <>
          {orderStatus === "loading" ? (
            <SkeletonLoaderOrders />
          ) : (
            <>
              {orders.map((order) => {
                return (
                  <div key={order.id} className="my-12 mx-44">
                    <div className="flex flex-col bg-[#fffbfb] border-[1px] pt-6 px-8 border-[#fcf6f6] shadow-md rounded-md">
                      <div className=" flex justify-between pb-8 pt-4 border-b-[1px] border-b-[#ccc]">
                        <div className=" bg-[#f5f5f5] py-2 px-4 rounded-full font-bold">
                          <span className=" text-base text-black mr-2">
                            Order
                          </span>
                          <span className=" text-[#0752d2aa]">#{order.id}</span>
                        </div>
                        <div className=" translate-x-[-20px] text-sm text-[#737373]">
                          <span>Order Placed: {order.orderDate}</span>
                        </div>
                        <div className=" flex items-center bg-[#51cccc] py-2 px-4 rounded-full font-bold">
                          <LiaCrosshairsSolid className=" text-[white] text-lg" />
                          <span className=" text-white font-bold ml-2">
                            Track Order
                          </span>
                        </div>
                      </div>
                      {order.items?.map((item) => {
                        return (
                          <div
                            key={item.id}
                            className=" flex justify-between py-5 border-b-[1px] border-b-[#ccc]"
                          >
                            <div className=" flex">
                              <img
                                src={item.product.thumbnail}
                                alt="img"
                                className=" h-28 w-22 rounded-md mr-4"
                              />
                              <div className=" flex flex-col">
                                <span className="text-sm text-[#444] max-w-[200px] whitespace-nowrap overflow-hidden text-ellipsis mb-2">
                                  {item.product.name}
                                </span>
                                <span className=" text-xs text-[#444] font-bold">
                                  {item.product.brand}
                                </span>
                                <div className=" flex mt-8 text-[#737373] text-md">
                                  <div className=" pr-3 border-r-[1px] border-r-gray-400">
                                    Size :&nbsp; {item.selectedSize}
                                  </div>
                                  <div className=" ml-3 pr-3 border-r-[1px] border-r-gray-400">
                                    Qty :&nbsp; {item.quantity}
                                  </div>
                                  <div className=" ml-3 font-bold text-black">
                                    Rs.&nbsp;{item.product.price}
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className=" flex flex-col justify-center text-center">
                              <div className=" text-[#737373]">status</div>
                              <div className=" text-green-500 font-bold">
                                Out For Delevery
                              </div>
                            </div>
                            <div className=" flex flex-col justify-center">
                              <div className=" text-sm text-[#737373]">
                                Delivery Expected by
                              </div>
                              <div className=" text-green-500 font-bold text-xl font-poppins">
                                {order.deliveryDate}
                              </div>
                            </div>
                          </div>
                        );
                      })}
                      <div className=" flex items-center justify-between">
                        <div className=" flex items-center">
                          <div
                            onClick={() => handleRemoveOrder(order)}
                            className=" flex items-center text-[#727272] font-bold px-16 py-4 border-r-[1px] border-r-[#ccc] cursor-pointer"
                          >
                            <XMarkIcon className="h-4 w-4 mr-2 translate-y-[1px]" />
                            <span className="text-sm">Cancle Order</span>
                          </div>
                          <div className=" ml-8 text-xs text-[#727272]">
                            Paid using {order.paymentMethod}
                          </div>
                        </div>
                        <div className=" text-[#444] font-black font-Krala text-xl">
                          <span className=" font-Montserrat text-base">
                            Total :
                          </span>{" "}
                          <span className="text-base">₹</span>
                          {order.totalPrice}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </>
          )}
        </>
      ) : (
        <div className=" w-full flex flex-col items-center my-20">
          <div>
            <span className=" text-[#18181899] text-xl font-semibold opacity-90">
              Sadly, you haven't placed any orders till now.
            </span>
          </div>
          <div>
            <img
              src="https://images.bewakoof.com/sizeguide/no-orders.png"
              alt="bag"
              className=" w-[150px] mt-6"
            />
          </div>
          <div className=" mt-10 text-white font-Montserrat text-sm font-bold ">
            <Link
              to="/"
              className=" rounded-sm border-[1px] border-[#51cccc] px-6 py-3 bg-white text-[#51cccc]"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default MyOrders;
