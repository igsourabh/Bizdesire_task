import { Router } from "express";
import { addProduction, deleteProduct, getAllProduction, getSingleProduction, updateProduct } from "../../controller/products";

const router = Router();

router.post("/", addProduction);
router.get("/", getAllProduction);
router.get("/:id", getSingleProduction);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);

export default router