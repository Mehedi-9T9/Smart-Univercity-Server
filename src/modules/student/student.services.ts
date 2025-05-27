import { populate } from "dotenv"
import StudentModel from "./student.schema.model"
import path from "path"

const getAllStudentIntoDB =async()=>{
    const result =await StudentModel.find().populate('user').populate('academicSemister')
    .populate({
        path: 'academicDepartment',
        populate:{
            path: 'academicFaculty'
        }
    })
    return result
}
export const studentServices ={
    getAllStudentIntoDB,
}