import express from 'express'
import { userRouter } from '../modules/users/user.router'
import { academicSemisterRouter } from '../modules/academicSemister/academicSemister.router'
import { facultRouter } from '../modules/faculty/faculty.router'
import { academicDepartmentRouter } from '../modules/academicDepartment/academicDepartment.router'


const router =express.Router()
router.use("/user",userRouter)
router.use("/semister",academicSemisterRouter)
router.use("/faculty",facultRouter)
router.use("/academicDepartment",academicDepartmentRouter)
// router.use("/user",userRouter)
export default router;