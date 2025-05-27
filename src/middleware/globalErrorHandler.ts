import {Response, Request, NextFunction } from "express"
import { ZodError } from "zod"
import config from "../config"

const globalErrorHandler =(error:any,req:Request,res:Response,next:NextFunction)=>{
  let statusCode = error.statusCode || 500
  let errorMessage = error.message || "something went wrong" 
  let path:(string |number) =''
  let message =''


if(error instanceof ZodError){
statusCode =400;
errorMessage ='Zod Validation Error'
path =error.issues[0].path.slice(-1)[0]
message =error.issues[0].message

}

//Error Pattern
//success: true | false
//message: string
//errorSources: 
//stack:

 res.status(statusCode).json({
    success:false,
    message:errorMessage,
    errorSources:{
        path,
        message
    },
    stack: config.NODE_ENV === "development"? error?.stack : null,
    
  })                                                                                                                                                                                                                                                                       

}
export default globalErrorHandler