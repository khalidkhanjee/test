"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_errors_1 = __importDefault(require("http-errors"));
const errorHandler_1 = require("./middlewares/errorHandler");
const currentStock_route_1 = __importDefault(require("./routes/currentStock.route"));
const config_1 = require("./config");
const app = (0, express_1.default)();
const morgan = require("morgan");
app.use(express_1.default.json());
app.use(morgan(':remote-addr - [:date[web]] ":method :url HTTP/:http-version" :status Response Time::response-time ms'));
app.use("/stock", currentStock_route_1.default);
app.use(() => {
    throw (0, http_errors_1.default)(404, "Route not found.");
});
app.use(errorHandler_1.errorHandler);
app.listen(config_1.APP_PORT, () => {
    console.log(`Listening On PORT ${config_1.APP_PORT}`);
});
