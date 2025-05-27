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
exports.academicDepartmentServices = void 0;
const appError_1 = __importDefault(require("../../app/errors/appError"));
const academicDepartment_schema_model_1 = require("./academicDepartment.schema.model");
const createAcademicDepartmentIntoDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield academicDepartment_schema_model_1.AcademicDepartmentModel.create(payload);
    return result;
});
const getAcademicDepartmentIntoDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield academicDepartment_schema_model_1.AcademicDepartmentModel.find().populate('academicFaculty');
    return result;
});
const updateAcademicDepartmentIntoDB = (payload, id) => __awaiter(void 0, void 0, void 0, function* () {
    const updateDoc = { $set: { name: payload.name } };
    const isExist = yield academicDepartment_schema_model_1.AcademicDepartmentModel.findOne({ _id: id });
    if (!isExist) {
        throw new appError_1.default(404, "Data Update Fail");
    }
    const result = yield academicDepartment_schema_model_1.AcademicDepartmentModel.findOneAndUpdate({ _id: id }, updateDoc, { new: true });
    return result;
});
exports.academicDepartmentServices = {
    createAcademicDepartmentIntoDB,
    updateAcademicDepartmentIntoDB,
    getAcademicDepartmentIntoDB,
};
