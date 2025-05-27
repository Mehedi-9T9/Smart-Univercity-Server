"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.academicDepartmentRouter = void 0;
const express_1 = __importDefault(require("express"));
const academicDepartment_controllar_1 = require("./academicDepartment.controllar");
const router = express_1.default.Router();
router.get('/', academicDepartment_controllar_1.academicDepartmentControllar.getAcademicDepartment);
//router.post('/create-academicDepartment',requestValidation(academicDepartmentValidationSchema),academicDepartmentControllar.createAcademicDepartment)
router.post('/create-academicDepartment', academicDepartment_controllar_1.academicDepartmentControllar.createAcademicDepartment);
router.patch('/update-department/:id', academicDepartment_controllar_1.academicDepartmentControllar.updateAcademicDepartment);
exports.academicDepartmentRouter = router;
