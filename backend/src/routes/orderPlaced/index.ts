import { Router } from "express";
import { PlaceOrder, getAllOrderPlaced } from "../../controller/orderPlaced";

const router = Router();

router.get("/", getAllOrderPlaced);
router.post("/", PlaceOrder);

export default router;
