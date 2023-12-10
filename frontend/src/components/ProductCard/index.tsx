import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/router";
import React, { useState } from "react";
import "./style.css"
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
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      
      <Link
      href={`/product/${_id}`}
      className={`lg:w-1/4 md:w-1/2 p-4 w-full ${
        isHovered ? 'transform scale-105 transition-transform' : ''
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <a className="block relative h-48 rounded overflow-hidden">
        <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={image} />
      </a>
      <div className="mt-4">
        <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{category}</h3>
        <h2 className="text-white title-font text-lg font-medium">{name}</h2>
        <p className="mt-1">${price}</p>
      </div>
    </Link>
      

      
    </>
  );
};

export default ProductCard;
