import { NextFunction, Request, Response } from "express";
import { academicSemisterServices } from "./academicSemister.services";
import sendResponse from "../../utils/sendResponse";
import catchAsync from "../../utils/catchAsync";

const createAcademicSemister =catchAsync(async(req:Request,res:Response,next:NextFunction)=>{

    const semisterData =req.body
    const result = await academicSemisterServices.createAcademicSemisterInToDB(semisterData)
    sendResponse(res,{statusCode:200,success:true,message:"semister create successfull",data:result})
    

})
export const academicSemisterControllar={
    createAcademicSemister
}