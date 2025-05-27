"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.academicDepartmentValidationSchema = void 0;
const zod_1 = require("zod");
exports.academicDepartmentValidationSchema = zod_1.z.object({
    name: zod_1.z.string({
        required_error: "Name is required",
    }),
    academicFaculty: zod_1.z.string()
});
