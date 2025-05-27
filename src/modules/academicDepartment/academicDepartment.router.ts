import express from 'express'
import { academicDepartmentControllar } from './academicDepartment.controllar'
import requestValidation from '../../middleware/requestValidation'
import { academicDepartmentValidationSchema } from './academicDepartment.validation.schema'


const router =express.Router()
router.get('/',academicDepartmentControllar.getAcademicDepartment)

//router.post('/create-academicDepartment',requestValidation(academicDepartmentValidationSchema),academicDepartmentControllar.createAcademicDepartment)
router.post('/create-academicDepartment',academicDepartmentControllar.createAcademicDepartment)
router.patch('/update-department/:id',academicDepartmentControllar.updateAcademicDepartment)
router.get('/singleDepartment/:id',academicDepartmentControllar.getSingleDepartment)

export const academicDepartmentRouter =router