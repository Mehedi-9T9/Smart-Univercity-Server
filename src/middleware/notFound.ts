import e, { NextFunction, Request, Response } from "express"
import sendResponse from "../utils/sendResponse"

const notFound=((req:Request,res:Response,next:NextFunction)=>{
  sendResponse(res,{
    statusCode:404,
    success:true,
    message:"Api Not Found",
    data:''
  })                                                                                                                                                                                                                                                                      

})
export default notFound