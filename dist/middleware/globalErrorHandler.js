"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const config_1 = __importDefault(require("../config"));
const zodErrorHandle_1 = __importDefault(require("../app/errors/zodErrorHandle"));
const validationErrorHandle_1 = __importDefault(require("../app/errors/validationErrorHandle"));
const globalErrorHandler = (error, req, res, next) => {
    let statusCode = error.statusCode || 500;
    let errorMessage = error.message || "something went wrong";
    let path = '';
    let message = '';
    //Zod Error Handle
    if (error instanceof zod_1.ZodError) {
        const simplified = (0, zodErrorHandle_1.default)(error);
        statusCode = simplified.statusCode;
        errorMessage = simplified.errorMessage;
        path = simplified.path;
        message = simplified.message;
    }
    else if (error.name === "ValidationError") {
        const simplified = (0, validationErrorHandle_1.default)(error);
        statusCode = simplified.statusCode;
        errorMessage = simplified.errorMessage;
        path = simplified.path;
        message = simplified.message;
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
        error,
        stack: config_1.default.NODE_ENV === "development" ? error === null || error === void 0 ? void 0 : error.stack : null,
    });
};
exports.default = globalErrorHandler;
