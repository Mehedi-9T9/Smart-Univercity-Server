import express from 'express'
import { userRouter } from '../modules/users/user.router'
import { academicSemisterRouter } from '../modules/academicSemister/academicSemister.router'


const router =express.Router()
router.use("/user",userRouter)
router.use("/semister",academicSemisterRouter)
// router.use("/user",userRouter)
export default router;