"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const config_1 = __importDefault(require("../config"));
const globalErrorHandler = (error, req, res, next) => {
    let statusCode = error.statusCode || 500;
    let errorMessage = error.message || "something went wrong";
    let path = '';
    let message = '';
    if (error instanceof zod_1.ZodError) {
        statusCode = 400;
        errorMessage = 'Zod Validation Error';
        path = error.issues[0].path.slice(-1)[0];
        message = error.issues[0].message;
    }
    //Error Pattern
    //success: true | false
    //message: string
    //errorSources: 
    //stack:
    res.status(statusCode).json({
        success: false,
        message: errorMessage,
        errorSources: {
            path,
            message
        },
        stack: config_1.default.NODE_ENV === "development" ? error === null || error === void 0 ? void 0 : error.stack : null,
    });
};
exports.default = globalErrorHandler;
