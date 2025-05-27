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
exports.academicDepartmentControllar = void 0;
const catchAsync_1 = __importDefault(require("../../utils/catchAsync"));
const department_services_1 = require("./department.services");
const sendResponse_1 = __importDefault(require("../../utils/sendResponse"));
const createAcademicDepartment = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield department_services_1.academicDepartmentServices.createAcademicDepartmentIntoDB(req.body);
    (0, sendResponse_1.default)(res, { statusCode: 200, message: 'Department Create Successfull', success: true, data: result });
}));
const getAcademicDepartment = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield department_services_1.academicDepartmentServices.getAcademicDepartmentIntoDB();
    (0, sendResponse_1.default)(res, { statusCode: 200, message: 'Department All Data', success: true, data: result });
}));
const updateAcademicDepartment = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const info = req.body;
    const { id } = req.params;
    const result = yield department_services_1.academicDepartmentServices.updateAcademicDepartmentIntoDB(info, id);
    (0, sendResponse_1.default)(res, { statusCode: 200, message: 'Update successfull', success: true, data: result });
}));
const getSingleDepartment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const data = yield department_services_1.academicDepartmentServices.getSingleDepartmentIntoDB(id);
    (0, sendResponse_1.default)(res, { statusCode: 200, message: 'Update successfull', success: true, data });
});
exports.academicDepartmentControllar = {
    createAcademicDepartment,
    updateAcademicDepartment,
    getAcademicDepartment,
    getSingleDepartment,
};
