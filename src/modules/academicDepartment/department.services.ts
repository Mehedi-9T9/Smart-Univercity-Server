import { TAcedemicDepartment } from "./academicDepartment.interface";
import AcademicDepartmentModel from "./academicDepartment.schema.model";

const createAcademicDepartmentIntoDB =async(payload:TAcedemicDepartment)=>{
const result =await AcademicDepartmentModel.create(payload)
return result;
}
export const academicDepartmentServices ={
    createAcademicDepartmentIntoDB,
}