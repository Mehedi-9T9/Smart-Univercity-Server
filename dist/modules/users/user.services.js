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
const mongoose_1 = __importDefault(require("mongoose"));
const student_schema_model_1 = __importDefault(require("../student/student.schema.model"));
const user_schema_model_1 = __importDefault(require("./user.schema.model"));
const appError_1 = __importDefault(require("../../app/errors/appError"));
const createUserIntoDB = (student) => __awaiter(void 0, void 0, void 0, function* () {
    //transition and rollback use korte hobe
    const count = yield student_schema_model_1.default.find().estimatedDocumentCount();
    const currentId = "2025" + "02" + ((count === 0) ? 1 : count).toString().padStart(4, '0');
    const newUser = {};
    newUser.userId = currentId;
    newUser.role = "student";
    newUser.status = "in-progress";
    const session = yield mongoose_1.default.startSession();
    try {
        session.startTransaction();
        const user = yield user_schema_model_1.default.create([newUser], { session });
        if (!user.length) {
            throw new appError_1.default(400, "User Create Faild");
        }
        student.userId = user[0].userId;
        student.user = user[0]._id;
        //create student
        const newStudent = yield student_schema_model_1.default.create([student], { session });
        if (!newStudent.length) {
            throw new appError_1.default(400, 'Student Create Faild');
        }
        yield session.commitTransaction();
        yield session.endSession();
        return newStudent;
    }
    catch (error) {
        yield session.abortTransaction();
        yield session.endSession();
        throw new appError_1.default(400, "user create failed");
    }
});
exports.UserServices = {
    createUserIntoDB
};
