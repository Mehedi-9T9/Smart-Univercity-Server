import express from 'express'
import { studentControllar } from './student.controllar'

const router =express.Router()

router.get('/',studentControllar.getAllStudent)
export const studentRouter =router;