import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate, useParams } from "react-router-dom";
import { resetOrder, selectCurrentOrder } from "../features/order/OrderSlice";
import { resetCartAsync } from "../features/cart/cartSlice";
import { selectUserInfo } from "../features/user/userSlice";

const OrderSuccess = () => {
  const [gifPlayed, setGifPlayed] = useState(false);

  const dispatch = useDispatch();
  const param = useParams();
  const user = useSelector(selectUserInfo);
  const currentOrder = useSelector(selectCurrentOrder);

  useEffect(() => {
    dispatch(resetCartAsync());
    dispatch(resetOrder()); // action[reducer] from the orderSlice
  }, [dispatch, user]);

  const handleGifLoad = () => {
    setTimeout(() => {
      setGifPlayed(true);
    }, 2500);
  };

  return (
    <>
      {!param?.id && <Navigate to="/" replace={true} />}
      <div className=" h-screen bg-[#f7f7f7] font-Montserrat">
        <div className="container mx-auto pt-10">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">
              Order Placed Successfully!
            </h2>
            <p className="text-gray-600 mb-8">Thank you for your purchase.</p>
            {gifPlayed ? (
              <img
                src="/greenRight.png"
                alt="Order Success"
                className="mx-auto w-[600px] h-[400px]"
              />
            ) : (
              <img
                src="https://i.pinimg.com/originals/35/f3/23/35f323bc5b41dc4269001529e3ff1278.gif"
                alt="Order Success"
                className="mx-auto w-[600px] h-[400px]"
                onLoad={handleGifLoad}
              />
            )}
            <p className="text-gray-600 mt-8">
              You can check your order in My Account &nbsp; &gt; &nbsp; My
              Orders
            </p>
            <div className=" mt-8 text-white font-Montserrat text-xl font-bold ">
              <Link
                to="/"
                className=" rounded-md px-12 py-3 bg-[#42a2a2] hover:bg-[#3b8a8a]"
              >
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderSuccess;
