"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const studentSchema = new mongoose_1.Schema({
    userId: { type: String, },
    user: { type: mongoose_1.Schema.Types.ObjectId, ref: 'User' },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    FatherName: { type: String, required: true },
    motherName: { type: String, required: true },
    gender: { type: String, required: true },
    dateOfBirth: { type: String, required: true },
    email: { type: String, required: true },
    contactNo: { type: String, required: true },
    distric: { type: String, required: true },
    division: { type: String, required: true },
    relision: { type: String, required: true },
});
//passwork niye kaj korte hobe
const StudentModel = (0, mongoose_1.model)('Student', studentSchema);
exports.default = StudentModel;
