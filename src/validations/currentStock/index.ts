import { Request, Response, NextFunction, RequestHandler } from "express";
import { currentStockSchema } from "./currrentStockSchema";
import validator from "../validator";

export const currentStockValidation: RequestHandler = (
  request: Request,
  response: Response,
  next: NextFunction
) => validator(currentStockSchema.currentStock, request.query, next);
