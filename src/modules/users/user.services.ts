import { TStudent } from "../student/student.interface";
import StudentModel from "../student/student.schema.model";
import { TUser } from "./user.interface";
import UserModel from "./user.schema.model";

const createUserIntoDB=async(student:TStudent)=>{
    //transition and rollback use korte hobe

     const newUser:Partial<TUser> ={}
     newUser.userId ="2025050001"
     newUser.role ="student"
     newUser.status ="in-progress"

    const result =await UserModel.create(newUser)
   

    if(Object.keys(result).length){
       student.userId =result.userId;
       student.user =result._id

       //create student
       const newStudent =await StudentModel.create(student)
       return newStudent

    }


    

}
export const UserServices ={
    createUserIntoDB
}