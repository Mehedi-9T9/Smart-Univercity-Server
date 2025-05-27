"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_router_1 = require("../modules/users/user.router");
const academicSemister_router_1 = require("../modules/academicSemister/academicSemister.router");
const faculty_router_1 = require("../modules/faculty/faculty.router");
const academicDepartment_router_1 = require("../modules/academicDepartment/academicDepartment.router");
const student_router_1 = require("../modules/student/student.router");
const router = express_1.default.Router();
router.use("/user", user_router_1.userRouter);
router.use("/semister", academicSemister_router_1.academicSemisterRouter);
router.use("/faculty", faculty_router_1.facultRouter);
router.use("/academicDepartment", academicDepartment_router_1.academicDepartmentRouter);
router.use("/student", student_router_1.studentRouter);
// router.use("/user",userRouter)
exports.default = router;
