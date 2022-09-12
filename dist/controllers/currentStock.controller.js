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
exports.getCurrentSock = exports.currentStock = void 0;
const http_errors_1 = __importDefault(require("http-errors"));
const helper_1 = require("../utils/helper");
const constant_1 = require("../utils/constant");
const jsonfile = require("jsonfile");
const transactionsPath = "repos/Transactions.json";
const stockPath = "repos/Stock.json";
const currentStock = (request, response, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let sku = request.query.sku;
        let currentStock = yield (0, exports.getCurrentSock)(sku);
        const result = currentStock
            ? (0, helper_1.resultObject)(currentStock, true, 200, constant_1.message.STOCK_FOUND)
            : (0, helper_1.resultObject)(null, false, 401, constant_1.message.STOCK_NOT_FOUND);
        response.json(result);
    }
    catch (error) {
        return next(http_errors_1.default.InternalServerError);
    }
});
exports.currentStock = currentStock;
const getCurrentSock = (sku) => __awaiter(void 0, void 0, void 0, function* () {
    let [Stocks, Transactions] = yield Promise.all([
        jsonfile.readFileSync(stockPath),
        jsonfile.readFileSync(transactionsPath),
    ]);
    let currentStock = Stocks.find((stock) => stock.sku === sku);
    if (currentStock) {
        let currentTransactions = Transactions.filter((tran) => tran.sku === sku);
        const result = currentTransactions.reduce((acc, cur) => {
            acc.stock =
                cur.type === "refund" ? acc.stock + cur.qty : acc.stock - cur.qty;
            return acc;
        }, currentStock);
        return { sku: result.sku, qty: result.stock };
    }
    else {
        return null;
    }
});
exports.getCurrentSock = getCurrentSock;
