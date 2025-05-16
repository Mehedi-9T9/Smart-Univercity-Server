import express from "express";
import { academicSemisterControllar } from "./academicSemister.controllar";
import requestValidation from "../../middleware/requestValidation";
import academicSemisterValidationSchema from "./academicSemister.validation.schema";

const router=express.Router()
router.post('/create-academic-semister',requestValidation(academicSemisterValidationSchema),academicSemisterControllar.createAcademicSemister)
export const academicSemisterRouter =router;