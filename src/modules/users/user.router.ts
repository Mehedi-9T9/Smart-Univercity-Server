import express from 'express'
import { userControllar } from './user.controllar';
import studentValidationSchema from '../student/student.validation.schema';
import requestValidation from '../../middleware/requestValidation';


const router =express.Router();



router.post("/create-user",requestValidation(studentValidationSchema), userControllar.createUser)

export const userRouter =router;