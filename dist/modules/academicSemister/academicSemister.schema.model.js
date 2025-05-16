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
const mongoose_1 = require("mongoose");
const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];
const academicSemisterSchema = new mongoose_1.Schema({
    name: { type: String, enum: ['Autom', 'Summer', 'Fall'], required: true },
    semisterCode: { type: String, enum: ['01', '02', '03'], required: true },
    year: { type: Date, required: true },
    startMonth: { type: String, required: true, enum: months },
    endMonth: { type: String, required: true, enum: months }
});
academicSemisterSchema.pre('save', function (next) {
    return __awaiter(this, void 0, void 0, function* () {
        const isExist = yield AcademicSemisterModel.findOne({ name: this.name, year: this.year });
        if (isExist) {
            throw new Error("Sorry You can`T Admission");
        }
        next();
    });
});
const AcademicSemisterModel = (0, mongoose_1.model)('AcademicSemister', academicSemisterSchema);
exports.default = AcademicSemisterModel;
