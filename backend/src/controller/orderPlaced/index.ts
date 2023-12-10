import { Request, Response } from "express";
import OrderPlacedModel from "../../schema/OrderPlaced";
import { OrderPlaced } from "./types";
import CartModel from "../../schema/Cart";

export const getAllOrderPlaced = async (req: Request, res: Response) => {
  try {
    const find: OrderPlaced[] = await OrderPlacedModel.find().populate({
      path: "items.ProductId",
      model: "Product",
    }).sort({createdAt:-1});
    res.status(200).json({
      STATUS_MESSAGE: "SUCCESS",
      STATUS_RESPONSE: find,
    });
  } catch (error: any) {
    res.status(500).json({
      STATUS_MESSAGE: "FAILURE",
      STATUS_RESPONSE: error.message,
    });
  }
};
export const PlaceOrder = async (req: Request, res: Response) => {
  try {
    function generateRandomOrderId() {
      // Prefix for the order ID (optional)
      const prefix = 'ORD';
    
      // Get the current timestamp
      const timestamp = new Date().getTime();
    
      // Generate a random 3-digit number
      const randomPart = Math.floor(Math.random() * 1000);
    
      // Combine the prefix, timestamp, and random number
      const orderId = `${prefix}${timestamp}${randomPart}`;
    
      return orderId;
    }
    
    // Example usage
    const randomOrderId = generateRandomOrderId();
    
    const find = await CartModel.find().populate("ProductId").sort({createdAt:-1});
    if (!find.length) {
      return res.status(200).json({
        STATUS_MESSAGE: "WARNING",
        STATUS_RESPONSE: "NO ITEM ADDED IN CART TO PLACE ORDER",
      });
    }
    const map = find.map((e: any) => {
      return { ProductId: e.ProductId._id, quantity: e.quantity };
    });
    const itemsPurchaseHistory: any = find.map((e: any) => {
      return { ...e };
    });
    let totalPrice = 0;
    let totalQuantity = 0;

    find.forEach((cartItem) => {
      const product = cartItem.ProductId;
      const quantity = cartItem.quantity;
      const productPrice = product?.price || 0;

      totalPrice += quantity * productPrice;
      totalQuantity += quantity;
    });
    // console.log(itemsPurchaseHistory);
    const create: OrderPlaced = await OrderPlacedModel.create({
      orderId:randomOrderId,
      items: map,
      itemsPurchaseHistory: itemsPurchaseHistory,
      totalPrice: totalPrice,
      totalQuantity: totalQuantity,
      shippingAddress: "123 address",
    });
    find.forEach(async (e: any) => {
      await CartModel.findByIdAndDelete(e._id);
      // console.log(e._id);
    });
    res.status(200).json({
      STATUS_MESSAGE: "SUCCESS",
      STATUS_RESPONSE: create,
    });
  } catch (error: any) {
    res.status(500).json({
      STATUS_MESSAGE: "FAILURE",
      STATUS_RESPONSE: error.message,
    });
  }
};
