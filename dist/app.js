"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_router_1 = require("./modules/users/user.router");
const notFound_1 = __importDefault(require("./middleware/notFound"));
const express = require('express');
const app = express();
// user Apis
app.use(express.json());
app.use("/api/v1/user", user_router_1.userRouter);
//notFound works
app.use(notFound_1.default);
app.get('/', (req, res) => {
    res.send('Hello World! hahaha');
});
app.use((err, req, res, next) => {
    const messageStatus = 500;
    const errroMessage = err.message || "something went wrong";
    res.status(messageStatus).json({
        success: false,
        message: errroMessage,
        error: err
    });
});
exports.default = app;
