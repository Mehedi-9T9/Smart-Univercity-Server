"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.facultyValidationSchema = void 0;
const zod_1 = require("zod");
exports.facultyValidationSchema = zod_1.z.object({
    name: zod_1.z.string(),
    education: zod_1.z.string()
});
