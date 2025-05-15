import express from 'express'
import { userRouter } from '../modules/users/user.router'


const router =express.Router()
router.use("/user",userRouter)
// router.use("/user",userRouter)
export default router;