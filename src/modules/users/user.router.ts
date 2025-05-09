import express from 'express'
import { userControllar } from './user.controllar';


const router =express.Router();

router.post("/create-user", userControllar.createUser)

export const userRouter =router;