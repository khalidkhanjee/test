"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.currentStockValidation = void 0;
const currrentStockSchema_1 = require("./currrentStockSchema");
const validator_1 = __importDefault(require("../validator"));
const currentStockValidation = (request, response, next) => (0, validator_1.default)(currrentStockSchema_1.currentStockSchema.currentStock, request.query, next);
exports.currentStockValidation = currentStockValidation;
