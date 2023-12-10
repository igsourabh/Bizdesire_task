import { Request, Response } from "express";
import { CreateProduct, Product, UpdateProduct } from "./types";
import ProductModel from "../../schema/Products";

export const getAllProduction = async (req: Request, res: Response) => {
  try {
    const find: Product[] = await ProductModel.find();
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

export const getSingleProduction = async (req: Request, res: Response) => {
  try {
    const find: any = await ProductModel.findById(req.params.id);
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
export const addProduction = async (req: Request, res: Response) => {
  try {
    const data: CreateProduct[] = req.body;
    const create = await ProductModel.create(data);
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

export const updateProduct = async (req: Request, res: Response) => {
  try {
    const data: UpdateProduct = req.body;
    const update = await ProductModel.findByIdAndUpdate(req.params.id, data, {
      new: true,
    });
    res.status(200).json({
      STATUS_MESSAGE: "SUCCESS",
      STATUS_RESPONSE: update,
    });
  } catch (error: any) {
    res.status(500).json({
      STATUS_MESSAGE: "FAILURE",
      STATUS_RESPONSE: error.message,
    });
  }
};

export const deleteProduct = async (req: Request, res: Response) => {
  try {
    const update = await ProductModel.findByIdAndDelete(req.params.id);
    res.status(200).json({
      STATUS_MESSAGE: "SUCCESS",
      STATUS_RESPONSE: update,
    });
  } catch (error: any) {
    res.status(500).json({
      STATUS_MESSAGE: "FAILURE",
      STATUS_RESPONSE: error.message,
    });
  }
};
