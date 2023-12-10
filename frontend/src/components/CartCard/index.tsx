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
      <div className="py-8 flex flex-wrap md:flex-nowrap">
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
          <h2 className="text-2xl font-medium text-white title-font mb-2 flex  justify-between">
            <Link className=" opacity-100 hover:opacity-50" href={`/product/${ProductId?._id}`}>{ProductId?.name}</Link>
            <button
              onClick={() => {
                handelremoveCartItem(_id);
              }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6 hover:cursor-pointer opacity-50 hover:opacity-95">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m6 4.125l2.25 2.25m0 0l2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
                />
              </svg>
            </button>
          </h2>

          <p className="leading-relaxed">{ProductId?.description}</p>
          <div className="text-white inline-flex items-center mt-4">
            Qty {quantity}{" "}
            <div className=" border-white   border p-2 ml-2 rounded-md">
              Price: {ProductId?.price * quantity}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartCard;
