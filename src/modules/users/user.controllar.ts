import { Request, RequestHandler, Response } from "express";
import { UserServices } from "./user.services";
// import { userValidationSchema } from "./user.validation.schema";
import sendResponse from "../../utils/sendResponse";
import catchAsync from "../../utils/catchAsync";

const createUser:RequestHandler =catchAsync(async(req:Request,res:Response)=>{
 
     const studentData =req.body


        //Pore ai kaj korbo 
        // const validation =  userValidationSchema.parse(userData)
        // if(!validation){
        //     throw new Error("user information not valid")
        // }
       
        const result = await UserServices.createUserIntoDB(studentData)
        sendResponse(res,{
        statusCode:200,
        success:true,
        message:"User create Successfull",
        data:result
    })
})
export const userControllar ={
    createUser
}