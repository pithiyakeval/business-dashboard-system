import express from "express";
import { createTractor, getTractors, updateTractor, deleteTractor } from "../controllers/tractorController.js";

const router = express.Router();

router.post("/", createTractor);
router.get("/", getTractors);
router.put("/:id", updateTractor);
router.delete("/:id", deleteTractor);

export default router;
