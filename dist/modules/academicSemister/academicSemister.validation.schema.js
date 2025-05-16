"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
// Month array
const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December",
];
// Zod schema for academic semester
const academicSemisterValidationSchema = zod_1.z.object({
    name: zod_1.z.enum(["Autom", "Summer", "Fall"]),
    semisterCode: zod_1.z.enum(["01", "02", "03"]),
    year: zod_1.z.coerce.date(), // Coerce to Date type
    startMonth: zod_1.z.enum(months),
    endMonth: zod_1.z.enum(months),
});
exports.default = academicSemisterValidationSchema;
