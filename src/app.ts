import { Request, Response } from "express"
import { userRouter } from "./modules/users/user.router"

const express = require('express')
const app = express()


// user Apis
app.use(express.json())
app.use("/api/v1/user",userRouter)

app.get('/', (req:Request, res:Response) => {
  res.send('Hello World! hahaha')
})

export default app;
