import express from "express";
import {createOrder,deleteOrder,getOrders, updateOrder} from "../controllers/orderController.js";
import { get } from "mongoose";

const router = express.Router();

router.post("/",createOrder);
router.get("/",getOrders);
router.put("/:id",updateOrder);
router.delete("/:id",deleteOrder);

export default router;