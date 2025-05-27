import express from 'express'
import { academicDepartmentControllar } from './academicDepartment.controllar'
import requestValidation from '../../middleware/requestValidation'
import { academicDepartmentValidationSchema } from './academicDepartment.validation.schema'


const router =express.Router()
router.get('/',academicDepartmentControllar.getAcademicDepartment)
router.post('/create-academicDepartment',requestValidation(academicDepartmentValidationSchema),academicDepartmentControllar.createAcademicDepartment)
router.patch('/update-department/:id',academicDepartmentControllar.updateAcademicDepartment)

export const academicDepartmentRouter =router