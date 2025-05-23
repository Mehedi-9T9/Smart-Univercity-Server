import { TFaculty } from "./faculty.interface";
import FacultyModel from "./faculty.schema.model";

const createFacultyIntoDB =async (payload:TFaculty)=>{
const result =await FacultyModel.create(payload)
return result
}
export const facultyServices ={
    createFacultyIntoDB,
}