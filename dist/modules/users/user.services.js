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
exports.UserServices = void 0;
const student_schema_model_1 = __importDefault(require("../student/student.schema.model"));
const user_schema_model_1 = __importDefault(require("./user.schema.model"));
const createUserIntoDB = (student) => __awaiter(void 0, void 0, void 0, function* () {
    //transition and rollback use korte hobe
    const newUser = {};
    newUser.userId = "2025050001";
    newUser.role = "student";
    newUser.status = "in-progress";
    const result = yield user_schema_model_1.default.create(newUser);
    if (Object.keys(result).length) {
        student.userId = result.userId;
        student.user = result._id;
        //create student
        const newStudent = yield student_schema_model_1.default.create(student);
        return newStudent;
    }
});
exports.UserServices = {
    createUserIntoDB
};
