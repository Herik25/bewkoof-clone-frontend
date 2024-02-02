import React, { useEffect, useState } from "react";
import { BsCurrencyRupee, BsFillCreditCard2BackFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { selectItems } from "../features/cart/cartSlice";
import {
  createOrderAsync,
  selectCurrentOrder,
} from "../features/order/OrderSlice";
import { selectUserInfo } from "../features/user/userSlice";
import CheckoutForm from "./CheckOutForm";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import "../Stripe.css";
import { data } from "autoprefixer";

const stripePromise = loadStripe(
  "pk_test_51N7ZW3SIQQqAiVpLq98b586XkAAgYujL4HgZZZ26CjHBIKO1ta5WthWGswxEXi4UQi5YwUCEi6eoeNr039rSyrcg00PE2xgUXV"
);

function Checkout() {
  const [clientSecret, setClientSecret] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("card");

  const dispatch = useDispatch();
  // const navigate = useNavigate();
  const user = useSelector(selectUserInfo);
  const items = useSelector(selectItems);
  const currentOrder = useSelector(selectCurrentOrder);

  const appearance = {
    theme: "stripe",
  };
  const options = {
    clientSecret,
    appearance,
  };

  const totalPrice = items.reduce(
    (amount, item) => item.product.price * item.quantity + amount,
    0
  );
  const discountPrice = items.reduce(
    (amount, item) => item.product.discountPrice * item.quantity + amount,
    0
  );
  const discount = discountPrice - totalPrice;

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads

    fetch("/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ totalPrice: totalPrice })
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, []);

  // Get delivery date
  const today = new Date();

  const deliveryDate = new Date(today);
  deliveryDate.setDate(today.getDate() + 7);

  const day = deliveryDate.getDate();
  const month = new Intl.DateTimeFormat("en-US", { month: "long" }).format(
    deliveryDate
  );
  const year = deliveryDate.getFullYear();
  const formattedDeliveryDate = `${day} ${month} ${year}`;

  // order day
  const orderDate = new Date(today);
  deliveryDate.setDate(today.getDate());

  const orderDay = deliveryDate.getDate();
  const orderMonth = new Intl.DateTimeFormat("en-US", { month: "long" }).format(
    deliveryDate
  );
  const orderYear = orderDate.getFullYear();
  const formattedOrderDateDate = `${orderDay} ${orderMonth} ${orderYear}`;

  const handleCardNumber = (event) => {
    let value = event.target.value.replace(/[^\d]/g, ""); // Remove non-digit characters
    value = value.replace(/(.{4})/g, "$1 "); // Add hyphen every 4 digits

    if (value.endsWith(" ")) {
      value = value.slice(0, -1); // Remove trailing hyphen
    }

    event.target.value = value;
  };

  const handleOrder = (e) => {
    e.preventDefault();
    const order = {
      items,
      user: user.id,
      totalPrice,
      paymentMethod,
      status: "pending",
      orderDate: formattedOrderDateDate,
      deliveryDate: formattedDeliveryDate,
    };
    dispatch(createOrderAsync(order));
    // navigate("/ordersuccess")
  };

  return (
    <>
      {/* to prevent a bug : blanck order placed */}
      {items.length === 0 && <Navigate to="/" />}
      {currentOrder && currentOrder.paymentMethod === "cash" && (
        <Navigate to={`/ordersuccess/${currentOrder.id}`} />
      )}
      {currentOrder &&
        currentOrder.paymentMethod === "card" &&
        currentOrder.cardPayment && (
          <Navigate to={`/ordersuccess/${currentOrder.id}`} />
        )}
      <div className="flex mt-1 pb-3 h-12 w-full items-center justify-between p-2 border-b-[1px] mb-8 border-[#ccc]">
        <div className="ml-44 flex items-center">
          <img src="logo.png" className="h-10 w-10 p-1" alt="Logo" />
          <div className="font-BungeeSpice text-4xl mt-0 pl-2 translate-y-[1px]">
            SYN
          </div>
        </div>
        <div className=" mr-44 flex flex-col items-start">
          <div className=" text-[10px] font-Montserrat font-bold text-[#333] opacity-50">
            Signed as
          </div>
          <div className=" min-w-[250px] text-md font-karala font-semibold text-[#333]">
            {user?.email}
          </div>
        </div>
      </div>
      <div className=" mx-48">
        <div className=" grid grid-cols-[7fr_3fr]">
          <div className=" flex flex-col px-5">
            <div className=" font-karala text-lg opacity-80 text-[$333] font-bold mb-5">
              Choose your payment method
            </div>
            <div className=" w-full grid grid-cols-[2fr_3fr] border-[1px] border-[#ccc]">
              <div className=" flex flex-col w-full font-Montserrat min-h-[350px]">
                <div
                  onClick={() => setPaymentMethod("card")}
                  className={` flex items-center justify-start p-6 cursor-pointer ${
                    paymentMethod === "card" ? "bg-white" : "bg-[#f7f7f7]"
                  } border-b-[1px] border-[#ccc] ${
                    paymentMethod === "card" &&
                    "border-l-[4px] border-l-[#42a2a2]"
                  } `}
                >
                  <BsFillCreditCard2BackFill
                    className={` text-2xl mr-4 ${
                      paymentMethod === "card" ? "opacity-100" : "opacity-50"
                    }`}
                  />
                  <span
                    className={` text-[14px] ${
                      paymentMethod === "card" && " font-bold"
                    }`}
                  >
                    Debit & Credit Card
                  </span>
                </div>
                <div
                  onClick={() => setPaymentMethod("cash")}
                  className={` flex items-center justify-start p-6 cursor-pointer ${
                    paymentMethod === "cash" ? "bg-white" : "bg-[#f7f7f7]"
                  } border-b-[1px] border-[#ccc] ${
                    paymentMethod === "cash" &&
                    "border-l-[4px] border-l-[#42a2a2]"
                  }`}
                >
                  <BsCurrencyRupee
                    className={` text-2xl mr-4 ${
                      paymentMethod === "cash" ? "opacity-full" : "opacity-50"
                    }`}
                  />
                  <span
                    className={` text-[14px] ${
                      paymentMethod === "cash" && " font-bold"
                    }`}
                  >
                    Cash On Delivery
                  </span>
                </div>
              </div>
              {paymentMethod === "card" && (
                // <form className=" flex flex-col p-4">
                //   <div className=" flex">
                //     <div className="mr-6">
                //       <img
                //         src="https://images.bewakoof.com/web/ic-visa-gray-payment-v1.jpg"
                //         alt="visa"
                //         className=" h-4"
                //       />
                //     </div>
                //     <div className="mr-6">
                //       <img
                //         src="https://images.bewakoof.com/web/ic-master-card-payment-v1.jpg"
                //         alt="MasterCard"
                //         className=" h-4"
                //       />
                //     </div>
                //     <div className="mr-6">
                //       <img
                //         src="https://images.bewakoof.com/web/ic-rupay-payment-v1.jpg"
                //         alt="Rupay"
                //         className=" h-4"
                //       />
                //     </div>
                //     <div className="mr-6">
                //       <img
                //         src="https://images.bewakoof.com/web/ic-american-express-payment-v1.jpg"
                //         alt="Aex"
                //         className=" h-4"
                //       />
                //     </div>
                //   </div>
                //   <div className=" mt-11 font-Montserrat">
                //     <input
                //       type="text"
                //       id="cardNumber"
                //       placeholder="Card Number"
                //       onChange={handleCardNumber}
                //       className="w-full text-[12px] p-0 border-r-0 border-l-0 border-t-0 border-b-gray-300 focus:outline-none focus:ring-0 focus:border-gray-300 transition duration-300"
                //     />
                //   </div>
                //   <div className="flex gap-6 mt-8 font-Montserrat">
                //     <input
                //       type="text"
                //       id="valid"
                //       placeholder="Valid Through(MM/YY)"
                //       className="w-[40%] text-[12px] p-0 border-r-0 border-l-0 border-t-0 border-b-gray-300 focus:outline-none focus:ring-0 focus:border-gray-300 transition duration-300"
                //     />
                //     <input
                //       type="text"
                //       id="cvv"
                //       placeholder="CVV"
                //       className="w-[20%] text-[12px] p-0 border-r-0 border-l-0 border-t-0 border-b-gray-300 focus:outline-none focus:ring-0 focus:border-gray-300 transition duration-300"
                //     />
                //   </div>
                //   <div className=" mt-8 font-Montserrat">
                //     <input
                //       type="text"
                //       id="cardName"
                //       placeholder="Name On Card"
                //       className="w-full text-[12px] p-0 border-r-0 border-l-0 border-t-0 border-b-gray-300 focus:outline-none focus:ring-0 focus:border-gray-300 transition duration-300"
                //     />
                //   </div>
                //   <div className=" mt-8">
                //     <span className=" font-Montserrat text-sm text-[#737373]">
                //       This transaction you make is totally secure. We don't save
                //       your CVV number.
                //     </span>
                //   </div>
                //   <div className=" mt-6">
                //     <Link
                //       type="submit"
                //       value="submit"
                //       className=" w-full text-white font-Montserrat text-base font-bold rounded-md p-x3 py-2 bg-[#42a2a2]"
                //       // onClick={handleOrder}
                //       to='/stripe-checkout'
                //     >
                //       Pay <span className=" font-Krala">₹</span>
                //       {totalPrice}
                //     </Link>
                //   </div>
                // </form>
                <div className="Stripe">
                  {clientSecret && (
                    <Elements options={options} stripe={stripePromise}>
                      <CheckoutForm
                        items={items}
                        user={user}
                        totalPrice={totalPrice}
                        paymentMethod={paymentMethod}
                        formattedOrderDateDate={formattedOrderDateDate}
                        formattedDeliveryDate={formattedDeliveryDate}
                      />
                    </Elements>
                  )}
                </div>
              )}
              {paymentMethod === "cash" && (
                <form className=" flex flex-col w-full p-6">
                  <div className=" font-Montserrat text-base text-[#4e5664] mb-5">
                    Cash handling charges of ₹ 20 are applicable
                  </div>
                  <button
                    type="submit"
                    value="submit"
                    onClick={handleOrder}
                    className=" w-full text-white font-Montserrat text-base font-bold rounded-md p-x3 py-2 bg-[#42a2a2]"
                  >
                    Pay <span className=" font-Krala">₹</span>
                    {totalPrice + 20}
                  </button>
                </form>
              )}
            </div>
          </div>
          <div className=" flex flex-col border-l-[1px] border-l-[#ccc] h-full px-5 font-Montserrat">
            <div className=" border-b-[1px] border-b-[#ccc] py-4">
              <div className=" text-xs">
                Delivering order to{" "}
                {user?.selectedAddress ? (
                  <span className=" font-bold">
                    {user.selectedAddress?.name}
                  </span>
                ) : (
                  <span className=" font-bold">{user?.addresses[0]?.name}</span>
                )}
              </div>
              <div className=" flex items-center">
                {user?.selectedAddress ? (
                  <span className=" text-sm text-[#525252]">
                    {user?.selectedAddress?.street},{" "}
                    {user?.selectedAddress?.city},{" "}
                    {user?.selectedAddress?.state},{" "}
                    {user?.selectedAddress?.pincode}
                  </span>
                ) : (
                  <span className=" text-sm text-[#525252]">
                    {user?.addresses[0]?.street}, {user?.addresses[0]?.city},{" "}
                    {user?.addresses[0]?.state}, {user?.addresses[0]?.pincode}
                  </span>
                )}
                <Link to="/myaddresses" className=" ml-1 cursor-pointer">
                  <img
                    src="https://images.bewakoof.com/web/right-arrow-addr-1645078965.svg"
                    alt="addressIcon"
                  />
                </Link>
              </div>
            </div>
            <div className=" ">
              <div className=" text-sm text-[#333] mb-3 font-bold pt-4">
                You are paying for these items
              </div>
              {items.map((item) => {
                return (
                  <div
                    key={item.product.id}
                    className=" flex gap-4 relative border-b-[1px] border-b-[#ccc] py-2"
                  >
                    <img
                      src={item.product.thumbnail}
                      alt="img"
                      className=" max-w-[44px]"
                    />
                    <span className=" absolute bottom-2 left-6 bg-black p-1 px-2 rounded-full text-[8px] text-white opacity-80">
                      {item.quantity}
                    </span>
                    <div className=" felx flex-col">
                      <div className=" text-sm text-[#444] max-w-[300px] whitespace-nowrap overflow-hidden text-ellipsis pb-[2px]">
                        {item.product.name}
                      </div>
                      <div className=" text-[#737373] text-xs">
                        Estimated delivery by{" "}
                        <span className=" text-[#00b852] font-bold">
                          {formattedDeliveryDate}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className=" flex flex-col border-b-[1px] border-b-[#ccc]">
              <div className=" flex items-center py-3 px-3">
                <span className=" font-Krala font-bold text-base">
                  PRICE SUMMARY
                </span>
              </div>
              <div className=" flex justify-between p-3 font-poppins text-[13px] text-[#292d35]">
                <div className=" flex flex-col justify-between min-h-[70px]">
                  <span>Total MRP (Incl. of taxes) </span>
                  <span>Shipping Charges </span>
                  <span>Discount on MRP </span>
                </div>
                <div className=" flex flex-col justify-between min-h-[70px]">
                  <span>
                    <span className=" font-Krala">₹</span>
                    {discountPrice}
                  </span>
                  <span className=" text-[#1d8802]">FREE</span>
                  <span className=" translate-x-[-7px]">
                    -<span className=" font-Krala">₹</span>
                    {discount}
                  </span>
                </div>
              </div>
            </div>
            <div className="flex justify-between m-3">
              <span className=" font-bold font-Montserrat text-sm">
                Final Amount{" "}
              </span>
              <div>
                <span className=" font-Krala text-sm">₹</span>
                <span className=" text-sm font-bold">{totalPrice}</span>
              </div>
            </div>
            <div className=" w-full flex items-center justify-between px-4 border-b-[1px] pb-4 border-b-[#ccc]">
              <div className=" flex flex-col items-center">
                <img
                  className=" h-10 w-10"
                  src="https://images.bewakoof.com/web/cart-badge-trust.svg"
                  alt="imgPolicies"
                />
                <span className=" font-Montserrat text-[8px] text-center mt-1 text-[#c7cbd4]">
                  100% SECURE PAYMENTS
                </span>
              </div>
              <div className=" flex flex-col items-center max-w-[80px]">
                <img
                  className=" h-10 w-10"
                  src="https://images.bewakoof.com/web/cart-easy-return.svg"
                  alt="imgPolicies"
                />
                <span className=" font-Montserrat text-[8px] text-center mt-1 text-[#c7cbd4]">
                  EASY RETURNS & INSTANT REFUNDS
                </span>
              </div>
              <div className=" flex flex-col items-center max-w-[80px]">
                <img
                  className=" h-10 w-10"
                  src="https://images.bewakoof.com/web/Globe-gray-badge.svg"
                  alt="imgPolicies"
                />
                <span className=" font-Montserrat text-[8px] text-center mt-1 text-[#c7cbd4]">
                  SHIPPING GLOBALLY
                </span>
              </div>
            </div>
            <div className=" translate-y-[-14px] text-center">
              <span className=" font-Montserrat text-xs text-[#8f98a9] bg-white px-2">
                We accept
              </span>
            </div>
            <div className=" flex justify-around px-4">
              <img
                src="https://images.bewakoof.com/web/google-pay-logo.svg"
                alt="options"
              />
              <img
                src="https://images.bewakoof.com/web/upi-sign.svg"
                alt="options"
              />
              <img
                src="https://images.bewakoof.com/web/phone-pay-logo.svg"
                alt="options"
              />
              <img
                src="https://images.bewakoof.com/web/visa-card-logo-9.svg"
                alt="options"
              />
              <img
                src="https://images.bewakoof.com/web/master-card.svg"
                alt="options"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Checkout;
