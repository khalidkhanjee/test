"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createExample = exports.getExample = void 0;
const http_errors_1 = __importDefault(require("http-errors"));
const constant = require("./../utils/constant");
const getExample = (req, res, next) => {
    res.send({ message: "Working with typescript..." });
};
exports.getExample = getExample;
const createExample = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { sku, qty } = req.body;
    try {
    }
    catch (error) {
        return next(http_errors_1.default.InternalServerError);
    }
});
exports.createExample = createExample;
