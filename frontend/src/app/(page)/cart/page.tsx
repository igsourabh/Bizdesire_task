"use client";
import CartCard from "@/components/CartCard";
import ProductCard from "@/components/ProductCard";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";

const page = () => {
  const data = useSelector(
    (state: any) => state.cart?.data.STATUS_RESPONSE?.cartItems
  );
  useEffect(() => {
    return () => {};
  }, [data]);

  return (
    <section className="p-24 text-gray-400 bg-gray-900 body-font h-full min-h-screen">
      <div className="container px-5 py-24 mx-auto">
        <div className="-my-8 divide-y-2 divide-gray-800">
          {data?.map((e: any, index: number) => {
            return <CartCard {...e} key={index} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default page;
