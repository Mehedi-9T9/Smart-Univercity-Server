"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_router_1 = require("./modules/users/user.router");
const express = require('express');
const app = express();
// user Apis
app.use(express.json());
app.use("/api/v1/user", user_router_1.userRouter);
app.get('/', (req, res) => {
    res.send('Hello World! hahaha');
});
exports.default = app;
