"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const mongoose_1 = __importDefault(require("mongoose"));
const config_1 = __importDefault(require("../src/config"));
// const port = 3000;
(() => __awaiter(void 0, void 0, void 0, function* () {
    try {
        app_1.default.listen(config_1.default.PORT, () => {
            console.log(config_1.default.PORT);
            console.log(`Example app listening on port ${config_1.default.PORT}`);
        });
        yield mongoose_1.default.connect(`${config_1.default.DATABASE_URI}`);
    }
    catch (error) {
        console.log(error, "server related problem");
    }
}))();
