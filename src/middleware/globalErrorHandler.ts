import {Response, Request, NextFunction } from "express"
import { ZodError } from "zod"
import config from "../config"

import simplifiedError from "../app/errors/zodErrorHandle"
import validationError from "../app/errors/validationErrorHandle"
import castErrorHandle from "../app/errors/castErrorHandle"

const globalErrorHandler =(error:any,req:Request,res:Response,next:NextFunction)=>{
  let statusCode = error.statusCode || 500
  let errorMessage = error.message || "something went wrong" 
  let path:(string |number) =''
  let message =''

 
//Zod Error Handle
if(error instanceof ZodError){
  const simplified = simplifiedError(error)
statusCode =simplified.statusCode;
errorMessage =simplified.errorMessage;
path =simplified.path;
message =simplified.message

}else if(error.name ==="ValidationError"){
  const simplified =validationError(error)
  statusCode =simplified.statusCode;
errorMessage =simplified.errorMessage;
path =simplified.path;
message =simplified.message
}else if(error.name ==="CastError"){
   const simplified =castErrorHandle(error)
  statusCode =simplified.statusCode;
errorMessage =simplified.errorMessage;
path =simplified.path;
message =simplified.message
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
    error,
    stack: config.NODE_ENV === "development"? error?.stack : null,
    
  })                                                                                                                                                                                                                                                                       

}
export default globalErrorHandler