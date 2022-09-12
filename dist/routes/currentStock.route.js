"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const currentStock_1 = require("../validations/currentStock");
const currentStock_controller_1 = require("../controllers/currentStock.controller");
const router = (0, express_1.Router)();
router.get("/current", currentStock_1.currentStockValidation, currentStock_controller_1.currentStock);
exports.default = router;
