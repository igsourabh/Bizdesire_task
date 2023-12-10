import { Router } from "express";
import { addtoCart, deleteCart, getcart, removeCartQty } from "../../controller/cart";

const router = Router();

router.post("/",addtoCart)
router.put("/removeqty/:id",removeCartQty)
router.delete("/:id",deleteCart)
router.get("/",getcart)
export default router