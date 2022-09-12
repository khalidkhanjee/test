"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createExampleValidation = void 0;
const userSchema_1 = require("./userSchema");
const validator_1 = __importDefault(require("../validator"));
const createExampleValidation = (req, res, next) => (0, validator_1.default)(userSchema_1.exampleSchema.createExample, req.body, next);
exports.createExampleValidation = createExampleValidation;
