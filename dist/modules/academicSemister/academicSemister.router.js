"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.academicSemisterRouter = void 0;
const express_1 = __importDefault(require("express"));
const academicSemister_controllar_1 = require("./academicSemister.controllar");
const requestValidation_1 = __importDefault(require("../../middleware/requestValidation"));
const academicSemister_validation_schema_1 = __importDefault(require("./academicSemister.validation.schema"));
const router = express_1.default.Router();
router.post('/create-academic-semister', (0, requestValidation_1.default)(academicSemister_validation_schema_1.default), academicSemister_controllar_1.academicSemisterControllar.createAcademicSemister);
exports.academicSemisterRouter = router;
