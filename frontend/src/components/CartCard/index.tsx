"use client";
import { removeCartItem } from "@/app/store/cart/cartSlice";
import Link from "next/link";
import React from "react";
import { useDispatch } from "react-redux";
export interface Cart {
  ProductId: any;
  quantity: number;
  _id: any;
}
const CartCard: React.FC<Cart> = ({ ProductId, quantity, _id }) => {
  const dispatch = useDispatch();
  const handelremoveCartItem = (id: string) => {
    dispatch(removeCartItem(id));
  };
  return (
    <>
      <div className="py-8 flex flex-wrap md:flex-nowrap bg-opacity-100">
        <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
          <span className="font-semibold title-font text-white">
            {ProductId?.category}
          </span>
          <div className="rounded-lg h-36 w-36 overflow-hidden">
            <img
              alt="content"
              className="object-cover object-center h-full w-full"
              src={ProductId?.image}
            />
          </div>
        </div>
        <div className="md:flex-grow">
          <h2 className="text-2xl font-medium text-white title-font mb-2 flex justify-between">
            <Link
              className="opacity-100 hover:opacity-50"
              href={`/product/${ProductId?._id}`}>
              {ProductId?.name}
            </Link>
            <button
              onClick={() => {
                handelremoveCartItem(_id);
              }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 hover:cursor-pointer opacity-50 hover:opacity-95"
                >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                />
              </svg>
            </button>
          </h2>
          <p className="leading-relaxed">{ProductId?.description}</p>
          <div className="text-white inline-flex items-center mt-4">
            Qty {quantity}{" "}
            <div className="border-white border p-2 ml-2 rounded-md">
              Price: {ProductId?.price * quantity}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartCard;
