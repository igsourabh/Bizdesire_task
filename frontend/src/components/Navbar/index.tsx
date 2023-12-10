"use client";
import { getCart } from "@/app/store/cart/cartSlice";
import Link from "next/link";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Navbar: React.FC = () => {
  const dispatch = useDispatch();
  const data = useSelector((state: any) => state.cart.data);
  useEffect(() => {
    dispatch(getCart());

    return () => {};
  }, []);
  return (
    <>
      <header className="text-gray-400 bg-gray-900 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link
            href="/"
            className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
            <span className="ml-3 text-xl">Task</span>
          </Link>

          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <Link href="/orders" className="mr-5 hover:text-white">
              Placed Order
            </Link>
            {/* <Link href="/cart" className="mr-5 hover:text-white">
              Second Link
            </Link>
            <Link href="/cart" className="mr-5 hover:text-white">
              Third Link
            </Link>
            <Link href="/cart" className="mr-5 hover:text-white">
              Fourth Link
            </Link> */}
          </nav>

          <Link href="/cart" className="mr-5 hover:text-white">
            {/* Fourth Link */}
            <button className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-cart mx-2 my-1"
                viewBox="0 0 16 16">
                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
              </svg>
              {data?.totalQuantity}
            </button>
          </Link>
        </div>
      </header>
    </>
  );
};

export default Navbar;
