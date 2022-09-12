"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DB_NAME = exports.DB_PASS = exports.DB_USER = exports.DB_CLIENT = exports.DB_HOST = exports.DB_PORT = exports.APP_PORT = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const result = dotenv_1.default.config();
if (result.error) {
    throw result.error;
}
exports.APP_PORT = process.env.APP_PORT;
exports.DB_PORT = process.env.DB_PORT;
exports.DB_HOST = process.env.DB_HOST;
exports.DB_CLIENT = process.env.DB_CLIENT;
exports.DB_USER = process.env.DB_USER;
exports.DB_PASS = process.env.DB_PASS;
exports.DB_NAME = process.env.DB_NAME;
