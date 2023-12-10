import { Request, Response } from "express";
import { Cart } from "./types";
import CartModel from "../../schema/Cart";

export const addtoCart = async (req: Request, res: Response) => {
  console.log("object");
  try {
    const find = await CartModel.findOne({ ProductId: req.body.ProductId });
    if (find) {
      await CartModel.findByIdAndUpdate(
        find._id,
        {
          quantity: req.body.quantity + find.quantity,
        },
        { new: true }
      );

      const finds = await CartModel.find().populate("ProductId");

      let totalPrice = 0;
      let totalQuantity = 0;

      finds.forEach((cartItem) => {
        const product = cartItem.ProductId;
        const quantity = cartItem.quantity;
        const productPrice = product?.price || 0;

        totalPrice += quantity * productPrice;
        totalQuantity += quantity;
      });

      res.status(200).json({
        STATUS_MESSAGE: "SUCCESS",
        STATUS_RESPONSE: {
          cartItems: finds,
          totalQuantity: totalQuantity,
          totalPrice: totalPrice.toFixed(2),
        },
      });
    } else {
      await CartModel.create(req.body);
      const finds = await CartModel.find().populate("ProductId");

      let totalPrice = 0;
      let totalQuantity = 0;

      finds.forEach((cartItem) => {
        const product = cartItem.ProductId;
        const quantity = cartItem.quantity;
        const productPrice = product?.price || 0;

        totalPrice += quantity * productPrice;
        totalQuantity += quantity;
      });

      res.status(200).json({
        STATUS_MESSAGE: "SUCCESS",
        STATUS_RESPONSE: {
          cartItems: finds,
          totalQuantity: totalQuantity,
          totalPrice: totalPrice.toFixed(2),
        },
      });
    }
  } catch (error: any) {
    res.status(500).json({
      STATUS_MESSAGE: "FAILURE",
      STATUS_RESPONSE: error.message,
    });
  }
};

export const removeCartQty = async (req: Request, res: Response) => {
  try {
    const find = await CartModel.findOne({ _id: req.params.id });
    if (!find) {
      return res.status(401).json({
        STATUS_MESSAGE: "SUCCESS",
        STATUS_RESPONSE: "YOUR CART IS EMPTY",
      });
    }
    if (find && find?.quantity == 0) {
      const findanddelete = await CartModel.findByIdAndDelete(find._id);
      return res.status(200).json({
        STATUS_MESSAGE: "SUCCESS",
        STATUS_RESPONSE: findanddelete,
      });
    }
    if (find) {
      const findandUpdate = await CartModel.findByIdAndUpdate(
        find._id,
        {
          quantity: find.quantity - 1,
        },
        { new: true }
      );
      res.status(200).json({
        STATUS_MESSAGE: "SUCCESS",
        STATUS_RESPONSE: findandUpdate,
      });
    } else {
      res.status(404).json({
        STATUS_MESSAGE: "FAILURE",
        STATUS_RESPONSE: "cart item not found",
      });
    }
  } catch (error: any) {
    res.status(500).json({
      STATUS_MESSAGE: "FAILURE",
      STATUS_RESPONSE: error.message,
    });
  }
};

export const deleteCart = async (req: Request, res: Response) => {
  try {
    const Delete = await CartModel.findByIdAndDelete(req.params.id);
    const find = await CartModel.find().populate("ProductId");

    let totalPrice = 0;
    let totalQuantity = 0;
    
    find.forEach((cartItem) => {
      const product = cartItem.ProductId;
      const quantity = cartItem.quantity;
      const productPrice = product?.price || 0;
    
      totalPrice += quantity * productPrice;
      totalQuantity += quantity;
    });
    
    res.status(200).json({
      STATUS_MESSAGE: "SUCCESS",
      STATUS_RESPONSE: {
        cartItems: find,
        totalQuantity: totalQuantity,
        totalPrice: totalPrice.toFixed(2),
      },
    });
  } catch (error: any) {
    res.status(500).json({
      STATUS_MESSAGE: "FAILURE",
      STATUS_RESPONSE: error.message,
    });
  }
};

export const getcart = async (req: Request, res: Response) => {
  try {
    const find = await CartModel.find().populate("ProductId");

    let totalPrice = 0;
    let totalQuantity = 0;
    
    find.forEach((cartItem) => {
      const product = cartItem.ProductId;
      const quantity = cartItem.quantity;
      const productPrice = product?.price || 0;
    
      totalPrice += quantity * productPrice;
      totalQuantity += quantity;
    });
    
    res.status(200).json({
      STATUS_MESSAGE: "SUCCESS",
      STATUS_RESPONSE: {
        cartItems: find,
        totalQuantity: totalQuantity,
        totalPrice: totalPrice.toFixed(2),
      },
    });
  } catch (error: any) {
    res.status(500).json({
      STATUS_MESSAGE: "FAILURE",
      STATUS_RESPONSE: error.message,
    });
  }
};
