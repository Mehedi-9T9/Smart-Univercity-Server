"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const validationError = (err) => {
    let path = '';
    let message = '';
    Object.values(err.errors).map((val) => {
        path = val === null || val === void 0 ? void 0 : val.path;
        message = val.message;
    });
    return {
        statusCode: 400,
        errorMessage: 'Validation Error',
        path,
        message
    };
};
exports.default = validationError;
