"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = __importDefault(require("express"));
const user_controllar_1 = require("./user.controllar");
const router = express_1.default.Router();
router.post("/create-user", user_controllar_1.userControllar.createUser);
exports.userRouter = router;
