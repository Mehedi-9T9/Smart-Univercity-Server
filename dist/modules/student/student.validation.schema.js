"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const studentValidationSchema = zod_1.z.object({
    userId: zod_1.z.string().optional(),
    user: zod_1.z.string().optional(), // ObjectId as a string
    firstName: zod_1.z.string(),
    lastName: zod_1.z.string().nonempty({ message: "Last name is required" }),
    FatherName: zod_1.z.string().nonempty({ message: "Father's name is required" }),
    motherName: zod_1.z.string().nonempty({ message: "Mother's name is required" }),
    gender: zod_1.z.string().nonempty({ message: "Gender is required" }),
    dateOfBirth: zod_1.z.string().nonempty({ message: "Date of birth is required" }),
    email: zod_1.z.string().email({ message: "Invalid email address" }),
    contactNo: zod_1.z.string().nonempty({ message: "Contact number is required" }),
    distric: zod_1.z.string().nonempty({ message: "District is required" }),
    division: zod_1.z.string().nonempty({ message: "Division is required" }),
    relision: zod_1.z.string().nonempty({ message: "Religion is required" }),
});
exports.default = studentValidationSchema;
