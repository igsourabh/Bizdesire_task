import mongoose from "mongoose";

interface Product {
  productId: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  rating: number;
  reviews: number;
}

const productSchema = new mongoose.Schema<Product>(
  {
    productId: { type: Number, required: true },
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String, required: true },
    category: { type: String, required: true },
    rating: { type: Number, required: true },
    reviews: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);

const ProductModel = mongoose.model<Product>("Product", productSchema);

export default ProductModel;
