import { NextFunction, Request, Response } from "express"
import { userRouter } from "./modules/users/user.router"
import notFound from "./middleware/notFound"

const express = require('express')
const app = express()


// user Apis
app.use(express.json())
app.use("/api/v1/user",userRouter)

//notFound works
app.use(notFound)
app.get('/', (req:Request, res:Response) => {
  res.send('Hello World! hahaha')
})

app.use((err:any,req:Request,res:Response,next:NextFunction)=>{
  const messageStatus =500
  const errroMessage = err.message || "something went wrong" 
  res.status(messageStatus).json({
    success:false,
    message:errroMessage,
    error:err
  })                                                                                                                                                                                                                                                                       

})

export default app;
