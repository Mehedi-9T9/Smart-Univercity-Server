import { RequestHandler } from "express";
import catchAsync from "../../utils/catchAsync";
import { academicDepartmentServices } from "./department.services";
import sendResponse from "../../utils/sendResponse";
import { AcademicDepartmentModel } from "./academicDepartment.schema.model";

const createAcademicDepartment:RequestHandler =catchAsync(async(req,res)=>{
const result = await academicDepartmentServices.createAcademicDepartmentIntoDB(req.body)
sendResponse(res,{statusCode:200,message:'Department Create Successfull',success:true,data:result})
})
const getAcademicDepartment:RequestHandler =catchAsync(async(req,res)=>{
const result = await academicDepartmentServices.getAcademicDepartmentIntoDB()
sendResponse(res,{statusCode:200,message:'Department All Data',success:true,data:result})
})

const updateAcademicDepartment:RequestHandler =catchAsync(async(req,res)=>{
    const info =req.body
    const {id}=req.params
    const result =await academicDepartmentServices.updateAcademicDepartmentIntoDB(info,id)
    sendResponse(res,{statusCode:200,message:'Update successfull',success:true,data:result})
})

const getSingleDepartment:RequestHandler =async(req,res)=>{
    const {id}=req.params
    const data =await academicDepartmentServices.getSingleDepartmentIntoDB(id)
    sendResponse(res,{statusCode:200,message:'Update successfull',success:true,data})
}
export const academicDepartmentControllar ={
    createAcademicDepartment,
    updateAcademicDepartment,
    getAcademicDepartment,
    getSingleDepartment,
}