import mongoose from "mongoose";

interface Cart {
  ProductId: any;
  quantity: number;
}

const cartSchema = new mongoose.Schema<Cart>(
  {
    ProductId: { type: mongoose.Schema.ObjectId, ref: "Product" },
    quantity: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);

const CartModel = mongoose.model<Cart>("cart", cartSchema);

export default CartModel;
