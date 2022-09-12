import { Router } from "express";
import { currentStockValidation } from "../validations/currentStock";
import { currentStock } from "../controllers/currentStock.controller";

const router = Router();

router.get("/current", currentStockValidation, currentStock);

export default router;
