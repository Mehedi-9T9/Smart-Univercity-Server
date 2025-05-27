import { NextFunction, Request, Response } from "express"
import { userRouter } from "./modules/users/user.router"
import notFound from "./middleware/notFound"
import router from "./app/routes"

import express from 'express'
import globalErrorHandler from "./middleware/globalErrorHandler"

const app = express()


// user Apis
app.use(express.json())
app.use("/api/v1",router)

//notFound works
app.use(notFound)
app.get('/', (req:Request, res:Response) => {
  res.send('Hello World! hahaha')
})



app.use(globalErrorHandler)

export default app;
