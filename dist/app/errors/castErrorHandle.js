"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const castErrorHandle = (error) => {
    return {
        statusCode: 400,
        errorMessage: "CastError",
        path: error.path,
        message: error.message
    };
};
exports.default = castErrorHandle;
