import mongoose from "mongoose";

interface OrderPlaced {
  items: [];
  itemsPurchaseHistory: [];
  totalPrice: number;
  shippingAddress: string;
  totalQuantity: number;
  orderId: string;
}

const OrderPlacedSchema = new mongoose.Schema<OrderPlaced>(
  {
    orderId: { type: String, require: true },
    items: [
      {
        ProductId: { type: mongoose.Schema.ObjectId, ref: "Product" },
        quantity: { type: Number, required: true },
      },
    ],
    itemsPurchaseHistory: [],
    totalPrice: {
      type: Number,
      required: true,
    },
    totalQuantity: {
      type: Number,
      required: true,
    },
    shippingAddress: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const OrderPlacedModel = mongoose.model<OrderPlaced>(
  "OrderPlaced",
  OrderPlacedSchema
);

export default OrderPlacedModel;
