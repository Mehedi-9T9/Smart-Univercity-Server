import express from 'express'
import { academicDepartmentControllar } from './academicDepartment.controllar'
import requestValidation from '../../middleware/requestValidation'
import { academicDepartmentValidationSchema } from './academicDepartment.validation.schema'


const router =express.Router()
router.post('/create-academicDepartment',requestValidation(academicDepartmentValidationSchema),academicDepartmentControllar.createAcademicDepartment)
export const academicDepartmentRouter =router