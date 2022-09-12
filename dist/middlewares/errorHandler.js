"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
const errorHandler = (err, req, res, next) => {
    if (res.headersSent) {
        return next(err);
    }
    res
        .status(err.statusCode)
        .json({
        status: false,
        statusCode: err.statusCode,
        message: err.message || "Unknow error.",
        data: []
    });
};
exports.errorHandler = errorHandler;
