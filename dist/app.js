"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const notFound_1 = __importDefault(require("./middleware/notFound"));
const routes_1 = __importDefault(require("./app/routes"));
const express_1 = __importDefault(require("express"));
const globalErrorHandler_1 = __importDefault(require("./middleware/globalErrorHandler"));
const app = (0, express_1.default)();
// user Apis
app.use(express_1.default.json());
app.use("/api/v1", routes_1.default);
//notFound works
app.use(notFound_1.default);
app.get('/', (req, res) => {
    res.send('Hello World! hahaha');
});
app.use(globalErrorHandler_1.default);
exports.default = app;
