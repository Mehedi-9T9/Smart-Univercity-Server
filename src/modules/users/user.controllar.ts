import { NextFunction, Request, Response } from "express";
import { UserServices } from "./user.services";
import { userValidationSchema } from "./user.validation.schema";

const createUser =async(req:Request,res:Response,next:NextFunction)=>{
    try {
        const studentData =req.body


        //Pore ai kaj korbo 
        // const validation =  userValidationSchema.parse(userData)
        // if(!validation){
        //     throw new Error("user information not valid")
        // }
       
        const result = await UserServices.createUserIntoDB(studentData)
        res.status(200).json(
    {
        status:true,
        message:"User create Successfull",
        data:result
    }
)
    } catch (error) {
       next(error)
        
    }
    
}
export const userControllar ={
    createUser
}