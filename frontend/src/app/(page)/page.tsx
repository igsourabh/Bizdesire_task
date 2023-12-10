"use client";
import ProductCard from "@/components/ProductCard";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchPosts } from "../store/product/productSlice";

export interface Product {
  _id: any;
  id: any;
  productId: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  rating: number;
  reviews: number;
}

export default function Home() {
  const dispatch = useDispatch();
  const data = useSelector((state: any) => state.product.data.STATUS_RESPONSE);

  useEffect(() => {
    dispatch(fetchPosts());

    return () => {};
  }, []);

  return (
    <>
      <section className="text-gray-400 bg-gray-900 body-font h-full min-h-screen">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 p-7">
            {data?.map((e: Product, index: number) => {
              return <ProductCard {...e} key={index} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
}
