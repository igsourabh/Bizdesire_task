import mongoose from "mongoose";

interface OrderPlaced {
  id: number;
  items: [];
  totalPrice: number;
  shippingAddress: string;
}

const OrderPlacedSchema = new mongoose.Schema<OrderPlaced>(
  {
    items: [],

    totalPrice: {
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

const OrderPlacedModel = mongoose.model<OrderPlaced>("OrderPlaced", OrderPlacedSchema);

export default OrderPlacedModel;
