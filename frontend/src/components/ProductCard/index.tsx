import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/router";
import React from "react";
interface ProductProps {
  id: number;
  _id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  rating: number;
  reviews: number;
}
const ProductCard: React.FC<ProductProps> = ({
  name,
  description,
  price,
  image,
  category,
  rating,
  reviews,
  id,
  _id
}) => {

  return (
    <>
      <div className="p-4 md:w-1/4 sm:mb-0 mb-6">
        <div className="rounded-lg h-64 overflow-hidden">
          <img
            alt="content"
            className="object-cover object-center h-full w-full"
            src={image}
          />
        </div>
        <h2 className="text-xl font-medium title-font text-white mt-5">
          {name}
        </h2>
        <p className="text-base leading-relaxed mt-2">{description}</p>
        <h2 className="text-sm font-medium title-font text-white mt-1">
          Price: {price}
        </h2>
        <Link
          href={`/product/${_id}`}
          className="text-indigo-400 inline-flex items-center mt-3">
          Details
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-4 h-4 ml-2"
            viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </Link>
      </div>
    </>
  );
};

export default ProductCard;
