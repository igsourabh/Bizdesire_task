import Link from "next/link";
import React from "react";
interface ProductProps {
  itemsPurchaseHistory: [];
  quantity: number;
  totalPrice: number;
  shippingAddress: string;
  createdAt: string;
  orderId:string
}
const OrderCard: React.FC<ProductProps> = ({
  itemsPurchaseHistory,
  totalPrice,
  shippingAddress,
  createdAt,
  orderId
}) => {
  const dateString = createdAt;
  const dateObject = new Date(dateString);
  const year = dateObject.getFullYear().toString().slice(-2);
  const month = (dateObject.getMonth() + 1).toString().padStart(2, "0");
  const day = dateObject.getDate().toString().padStart(2, "0");

  const formattedDate = `${year}-${month}-${day}`;
  return (
    <>
      <div className="bg-white dark:bg-gray-700 rounded-md p-4 shadow-md w-full md:w-auto">
        <h3 className="text-xl font-semibold mb-2">Order #{orderId}</h3>
        <ul className="text-white">
          {itemsPurchaseHistory.map(
            ({ ProductId: { name, _id }, quantity }) => {
              return (
                <li className="mb-2 cursor-pointer opacity-70 hover:opacity-100">
                  <Link href={`/product/${_id}`}>
                    {name} - Quantity: {quantity}{" "}
                  </Link>
                </li>
              );
            }
          )}
        </ul>
        <p className="mt-4 text-white">Total Price: ${totalPrice}</p>
        <p className="text-white">Shipping Address: {shippingAddress}</p>
        <p className="text-white">Order Date: {formattedDate}</p>
      </div>
    </>
  );
};

export default OrderCard;
