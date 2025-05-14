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
Object.defineProperty(exports, "__esModule", { value: true });
exports.userControllar = void 0;
const user_services_1 = require("./user.services");
const createUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const studentData = req.body;
        //Pore ai kaj korbo 
        // const validation =  userValidationSchema.parse(userData)
        // if(!validation){
        //     throw new Error("user information not valid")
        // }
        const result = yield user_services_1.UserServices.createUserIntoDB(studentData);
        res.status(200).json({
            status: true,
            message: "User create Successfull",
            data: result
        });
    }
    catch (error) {
        next(error);
    }
});
exports.userControllar = {
    createUser
};
