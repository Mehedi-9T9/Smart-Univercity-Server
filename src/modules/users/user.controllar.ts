import { Request, Response } from "express";
import { UserServices } from "./user.services";

const createUser =async(req:Request,res:Response)=>{
    try {
        const userData =req.body
const result = await UserServices.createUserIntoDB(userData)
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