"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.academicSemisterServices = void 0;
const academicSemister_constan_1 = require("./academicSemister.constan");
const academicSemister_schema_model_1 = __importDefault(require("./academicSemister.schema.model"));
const createAcademicSemisterInToDB = (semister) => {
    //Name and Semister Code cheaking
    if (academicSemister_constan_1.semisterInfo[semister.name] !== semister.semisterCode) {
        throw new Error("Sorry Give me Valid Information");
    }
    const result = academicSemister_schema_model_1.default.create(semister);
    return result;
};
exports.academicSemisterServices = {
    createAcademicSemisterInToDB,
};
