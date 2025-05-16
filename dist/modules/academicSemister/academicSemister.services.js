"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.academicSemisterServices = void 0;
const academicSemister_schema_model_1 = __importDefault(require("./academicSemister.schema.model"));
const createAcademicSemisterInToDB = (semister) => {
    const semisterInfo = {
        Autom: '01',
        Summer: '02',
        Fall: '03'
    };
    if (semisterInfo[semister.name] !== semister.semisterCode) {
        throw new Error("Sorry Give me Valid Information");
    }
    const result = academicSemister_schema_model_1.default.create(semister);
    return result;
};
exports.academicSemisterServices = {
    createAcademicSemisterInToDB,
};
