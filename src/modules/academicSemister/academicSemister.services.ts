import { semisterInfo } from "./academicSemister.constan"
import { TAcademicSemister } from "./academicSemister.interface"
import AcademicSemisterModel from "./academicSemister.schema.model"

const createAcademicSemisterInToDB =(semister:TAcademicSemister)=>{
  //Name and Semister Code cheaking
    if(semisterInfo[semister.name] !== semister.semisterCode){
        throw new Error("Sorry Give me Valid Information")
    }

const result = AcademicSemisterModel.create(semister)
return result
}
export const academicSemisterServices ={
    createAcademicSemisterInToDB,
}