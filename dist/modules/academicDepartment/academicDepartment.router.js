"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.academicDepartmentRouter = void 0;
const express_1 = __importDefault(require("express"));
const academicDepartment_controllar_1 = require("./academicDepartment.controllar");
const requestValidation_1 = __importDefault(require("../../middleware/requestValidation"));
const academicDepartment_validation_schema_1 = require("./academicDepartment.validation.schema");
const router = express_1.default.Router();
router.get('/', academicDepartment_controllar_1.academicDepartmentControllar.getAcademicDepartment);
router.post('/create-academicDepartment', (0, requestValidation_1.default)(academicDepartment_validation_schema_1.academicDepartmentValidationSchema), academicDepartment_controllar_1.academicDepartmentControllar.createAcademicDepartment);
router.patch('/update-department/:id', academicDepartment_controllar_1.academicDepartmentControllar.updateAcademicDepartment);
exports.academicDepartmentRouter = router;
