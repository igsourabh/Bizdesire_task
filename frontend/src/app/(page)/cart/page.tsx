"use client";
import CartCard from "@/components/CartCard";
import Modal from "@/components/modal";
import { useState } from "react";
import { useSelector } from "react-redux";

const page = () => {
  const [open, setOpen] = useState(false);
  const data = useSelector((state: any) => state.cart?.data);

  return (
    <section className="px-28 text-gray-400 bg-gray-900 body-font h-full min-h-screen">
      <div className="container px-5 py-24 mx-auto">
        <div className="-my-8 divide-y-2 divide-gray-800">
          <Modal setOpen={setOpen} open={open} />
          {!data?.cartItems?.length && (
            <h1 className="text-white text-4xl text-center flex justify-center items-center ">
              No Item Added In Cart
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="mx-2 w-10 h-10">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                />
              </svg>
            </h1>
          )}
          {data?.cartItems?.length > 0 && (
            <button
              onClick={() => {
                setOpen(true);
              }}
              className="fixed bottom-10 right-10 p-4 ex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Place Order: ${data?.totalPrice}
            </button>
          )}
          {data?.cartItems?.map((e: any, index: number) => {
            return <CartCard {...e} key={index} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default page;
