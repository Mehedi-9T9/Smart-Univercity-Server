import AppError from "../../app/errors/appError";
import { TAcedemicDepartment } from "./academicDepartment.interface";
import { AcademicDepartmentModel} from "./academicDepartment.schema.model";


const createAcademicDepartmentIntoDB =async(payload:TAcedemicDepartment)=>{
const result =await AcademicDepartmentModel.create(payload)
return result;
}

const getAcademicDepartmentIntoDB =async()=>{
const result =await AcademicDepartmentModel.find().populate('academicFaculty')
return result;
}

const updateAcademicDepartmentIntoDB =async(payload:TAcedemicDepartment,id:string)=>{
    const updateDoc =  { $set: { name: payload.name } }
    const isExist =await AcademicDepartmentModel.findOne({_id:id})
    if(!isExist){
        throw new AppError(404,"Data Update Fail")
    }

    const result = await AcademicDepartmentModel.findOneAndUpdate({_id:id},updateDoc,{new:true})
    return result
}
export const academicDepartmentServices ={
    createAcademicDepartmentIntoDB,
    updateAcademicDepartmentIntoDB,
    getAcademicDepartmentIntoDB,
}