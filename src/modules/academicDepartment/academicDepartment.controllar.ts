import { RequestHandler } from "express";
import catchAsync from "../../utils/catchAsync";
import { academicDepartmentServices } from "./department.services";
import sendResponse from "../../utils/sendResponse";

const createAcademicDepartment:RequestHandler =catchAsync(async(req,res)=>{
const result = await academicDepartmentServices.createAcademicDepartmentIntoDB(req.body)
sendResponse(res,{statusCode:200,message:'Department Create Successfull',success:true,data:result})
})
export const academicDepartmentControllar ={
    createAcademicDepartment,
}