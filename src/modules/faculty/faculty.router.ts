import express from 'express'
import { facultyControllar } from './faculty.controllar'
import requestValidation from '../../middleware/requestValidation';
import { facultyValidationSchema } from './faculty.validation.schema';

const router = express.Router()

router.post('/create-faculty', requestValidation(facultyValidationSchema), facultyControllar.createFaculty)
router.get('/all-faculty', facultyControllar.getAllFaculty)

export const facultRouter = router;