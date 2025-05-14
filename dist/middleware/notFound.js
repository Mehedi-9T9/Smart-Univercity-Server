"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const notFound = ((req, res, next) => {
    const messageStatus = 500;
    const errroMessage = "Api Not Found";
    res.status(messageStatus).json({
        success: false,
        message: errroMessage,
        error: ""
    });
});
exports.default = notFound;
