"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userValidationSchema = void 0;
const zod_1 = require("zod");
exports.userValidationSchema = zod_1.z.object({
    id: zod_1.z.string(),
    password: zod_1.z.string(),
    role: zod_1.z.enum(['admin', 'teacher', 'student']),
    status: zod_1.z.enum(['in-progress', 'blocked']),
    isDeleted: zod_1.z.boolean(),
});
