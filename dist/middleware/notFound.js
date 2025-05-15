"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sendResponse_1 = __importDefault(require("../utils/sendResponse"));
const notFound = ((req, res, next) => {
    (0, sendResponse_1.default)(res, {
        statusCode: 404,
        success: true,
        message: "Api Not Found",
        data: ''
    });
});
exports.default = notFound;
