import mongoose from "mongoose";
import { TStudent } from "../student/student.interface";
import StudentModel from "../student/student.schema.model";
import { TUser } from "./user.interface";
import UserModel from "./user.schema.model";
import AppError from "../../app/errors/appError";

const createUserIntoDB=async(student:TStudent)=>{
    //transition and rollback use korte hobe
   
    const count =await StudentModel.find().estimatedDocumentCount();
   
     const currentId ="2025"+"02"+((count === 0) ? 1 : count).toString().padStart(4,'0')

     const newUser:Partial<TUser> ={}
     newUser.userId =currentId
     newUser.role ="student"
     newUser.status ="in-progress"



     const session =await mongoose.startSession()

     try {
        session.startTransaction()
         const user =await UserModel.create([newUser],{session})
   

    if(!user.length){
        throw new AppError(400,"User Create Faild")

    }
    student.userId =user[0].userId;
       student.user =user[0]._id

       //create student
       const newStudent =await StudentModel.create([student],{session})
       if(!newStudent.length){
        throw new AppError(400,'Student Create Faild')
       }
       await session.commitTransaction()
       await session.endSession()


       return newStudent

     } catch (error) {
        await session.abortTransaction()
        await session.endSession()
        throw new AppError(400,"user create failed")
        
     }



   

    

}
export const UserServices ={
    createUserIntoDB
}