import { RxCrossCircled } from "react-icons/rx";
import React, { useState } from "react";
import MainWidth from "../../layout/MainWidth";
import Heading1 from "./../../components/Headings/Heading1";
import CustomBreadcrumb from "./../../components/CustomBreadcrumb";
import Sunglass from "../../assets/jpeg/SunglassProduct.jpg";
import Button from "../../components/Button";

const YourCart = () => {
  const initialCartData = [
    {
      productImg: Sunglass,
      productName: "Sunglass Premium",
      productPrice: 231,
      quantity: 1,
    },
    {
      productImg: Sunglass,
      productName: "Sunglass Premium",
      productPrice: 231,
      quantity: 1,
    },
  ];

  const [cartData, setCartData] = useState(initialCartData);

  const handleIncrement = (index) => {
    const newCartData = [...cartData];
    newCartData[index].quantity++;
    setCartData(newCartData);
  };

  const handleDecrement = (index) => {
    const newCartData = [...cartData];
    if (newCartData[index].quantity > 1) {
      newCartData[index].quantity--;
      setCartData(newCartData);
    }
  };

  const handleRemoveFromCart = (index) => {
    const newCartData = [...cartData];
    newCartData.splice(index, 1);
    setCartData(newCartData);
  };

  const breadCrumbItems = [
    { path: "/", label: "Home" },
    { path: "/shop", label: "Shop" },
    { label: "Cart" },
  ];

  return (
    <div className="grow mt-14 mb-28">
      <MainWidth>
        <div className="flex flex-col">
          <div className="mb-20">
            <Heading1 text="Cart" />
            <CustomBreadcrumb items={breadCrumbItems} />
          </div>
          <div className="flex flex-col gap-20">
            <div className="w-full">
              <div className="w-full bg-offwhite font-semibold text-primary font-dmsans flex flex-row items-center justify-between">
                <div className="py-5 w-1/4 text-center">Product</div>
                <div className="py-5 w-1/4 text-center">Price</div>
                <div className="py-5 w-1/4 text-center">Quantity</div>
                <div className="py-5 w-1/4 text-center">Total</div>
              </div>
              <div className="w-full flex flex-col mt-4">
                {cartData.map((item, index) => (
                  <div
                    key={index}
                    className="w-full flex flex-row items-center justify-between text-primary font-dmsans border-b border-gray-200 py-3 px-2"
                  >
                    <div className="w-1/4 flex flex-row items-center gap-4">
                      <RxCrossCircled
                        size={22}
                        className="cursor-pointer"
                        onClick={() => handleRemoveFromCart(index)}
                      />
                      <img
                        src={item.productImg}
                        alt={item.productName}
                        className="w-[100px] h-[100px]"
                      />
                      <p>{item.productName}</p>
                    </div>
                    <div className="w-1/4 text-center">
                      ${item.productPrice}
                    </div>
                    <div className="w-1/4 flex justify-center items-center">
                      <div className="flex items-center gap-4">
                        <button
                          onClick={() => handleDecrement(index)}
                          className="px-2 py-1 border border-gray-300 rounded-md cursor-pointer"
                        >
                          -
                        </button>
                        <span>{item.quantity}</span>
                        <button
                          onClick={() => handleIncrement(index)}
                          className="px-2 py-1 border border-gray-300 rounded-md cursor-pointer"
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="w-1/4 text-center">
                      ${item.quantity * item.productPrice}
                    </div>
                  </div>
                ))}
                <div className="px-6 py-6 border-b border-gray-200">
                  <div className="flex flex-row justify-between">
                    <div className="flex flex-row gap-4">
                      <input
                        type="text"
                        className="border border-gray-300 py-1.5 px-2 text-center text-primary font-dmsans text-base outline-none focus-within:outline-none"
                        placeholder="32TAW2"
                      />
                      <button className="text-sm font-semibold font-dmsans cursor-pointer hover:underline">
                        Apply coupon
                      </button>
                    </div>

                    <button className="text-sm font-semibold font-dmsans cursor-pointer hover:underline">
                      Update Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full flex justify-end mt-10">
              <div className="w-1/3 flex flex-col gap-4 font-dmsans">
                <h2 className="text-2xl font-bold text-primary mb-4">
                  Cart Totals
                </h2>
                <div className="flex flex-col gap-2">
                  <div className="flex justify-between border-b border-gray-200 py-2">
                    <span className="font-semibold">Subtotal</span>
                    <span>
                      $
                      {cartData.reduce(
                        (total, item) =>
                          total + item.productPrice * item.quantity,
                        0
                      )}
                    </span>
                  </div>
                  <div className="flex justify-between border-b border-gray-200 py-2">
                    <span className="font-semibold">Total</span>
                    <span className="font-bold">
                      $
                      {cartData.reduce(
                        (total, item) =>
                          total + item.productPrice * item.quantity,
                        0
                      )}
                    </span>
                  </div>
                </div>
                <Button
                  text="Proceed To Checkout"
                  className="py-3 px-7 mt-4 self-end"
                />
              </div>
            </div>
          </div>
        </div>
      </MainWidth>
    </div>
  );
};

export default YourCart;
