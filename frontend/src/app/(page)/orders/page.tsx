"use client";
import { getPlacedOrder } from "@/app/store/orders/orderSlice";
import OrderCard from "@/components/OrderCard";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const page = () => {
  const data = useSelector((state: any) => state.order?.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPlacedOrder());
    return () => {};
  }, []);

  return (
    <section className="px-28 text-gray-400 bg-gray-900 body-font h-full min-h-screen">
      <div className="container px-5 py-24 mx-auto">
        <div className="-my-8 divide-y-2 divide-gray-800">
          <div className="container mx-auto mt-8 flex flex-wrap">
            <h2 className="text-3xl font-semibold mb-4 text-white w-full">
              Order History
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
              {data.length > 0 &&
                data?.map((e: any) => {
                  return <OrderCard {...e} />;
                })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
