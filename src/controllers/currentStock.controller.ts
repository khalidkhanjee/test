import { RequestHandler, Request, Response, NextFunction, json } from "express";
import createHttpError from "http-errors";
import { IStock } from "../@types/Stock";
import { ITransaction } from "../@types/Transaction";
import { resultObject } from "../utils/helper";
import { message } from "../utils/constant";
import { ICurrentStock } from "../@types/CurrentSock";

const jsonfile = require("jsonfile");

const transactionsPath = "repos/Transactions.json";
const stockPath = "repos/Stock.json";

export const currentStock: RequestHandler = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  try {
    let sku: string = request.query.sku as string;
    let currentStock = await getCurrentSock(sku);
    const result = currentStock
      ? resultObject(currentStock, true, 200, message.STOCK_FOUND)
      : resultObject(null, false, 401, message.STOCK_NOT_FOUND);
    response.json(result);
  } catch (error) {
    return next(createHttpError.InternalServerError);
  }
};

export const getCurrentSock = async (
  sku: string
): Promise<ICurrentStock | null> => {
  let [Stocks, Transactions] = await Promise.all([
    jsonfile.readFileSync(stockPath),
    jsonfile.readFileSync(transactionsPath),
  ]);

  let currentStock = Stocks.find((stock: IStock) => stock.sku === sku);

  if (currentStock) {
    let currentTransactions = Transactions.filter(
      (tran: ITransaction) => tran.sku === sku
    );
    const result = currentTransactions.reduce(
      (acc: IStock, cur: ITransaction) => {
        acc.stock =
          cur.type === "refund" ? acc.stock + cur.qty : acc.stock - cur.qty;
        return acc;
      },
      currentStock
    );
    return { sku: result.sku, qty: result.stock };
  } else {
    return null;
  }
};
