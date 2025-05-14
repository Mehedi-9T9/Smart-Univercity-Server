import e, { NextFunction, Request, Response } from "express"

const notFound=((req:Request,res:Response,next:NextFunction)=>{
  const messageStatus =500
  const errroMessage = "Api Not Found" 
  res.status(messageStatus).json({
    success:false,
    message:errroMessage,
    error:""
  })                                                                                                                                                                                                                                                                       

})
export default notFound