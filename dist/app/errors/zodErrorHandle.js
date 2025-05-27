"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const simplifiedError = (error) => {
    return {
        statusCode: 400,
        errorMessage: 'Zod Validation Error',
        path: error.issues[0].path.slice(-1)[0],
        message: error.issues[0].message
    };
};
exports.default = simplifiedError;
