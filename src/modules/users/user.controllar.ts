import { Request, Response } from "express";
import { UserServices } from "./user.services";
import { userValidationSchema } from "./user.validation.schema";

const createUser =async(req:Request,res:Response)=>{
    try {
        const userData =req.body
        const validation =  userValidationSchema.parse(userData)

        if(!validation){
            throw new Error("user information not valid")
        }
        console.log(validation,"validation is console");
        const result = await UserServices.createUserIntoDB(validation)
        res.status(200).json(
    {
        status:true,
        message:"User create Successfull",
        data:result
    }
)
    } catch (error) {
        console.log(error);
        
    }
    
}
export const userControllar ={
    createUser
}