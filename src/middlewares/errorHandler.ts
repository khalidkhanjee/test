import { ErrorRequestHandler } from "express";

export const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
  if (res.headersSent) {
    return next(err);
  }
  res
    .status(err.statusCode)
    .json({
      status:false,
      statusCode: err.statusCode,
      message: err.message || "Unknow error.",
      data:[]
    });
};
