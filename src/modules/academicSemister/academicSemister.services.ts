import { TAcademicSemister } from "./academicSemister.interface"
import AcademicSemisterModel from "./academicSemister.schema.model"

const createAcademicSemisterInToDB =(semister:TAcademicSemister)=>{
    const semisterInfo ={
        Autom:'01',
        Summer:'02',
        Fall:'03'
    }
    if(semisterInfo[semister.name] !== semister.semisterCode){
        throw new Error("Sorry Give me Valid Information")
    }
const result = AcademicSemisterModel.create(semister)
return result
}
export const academicSemisterServices ={
    createAcademicSemisterInToDB,
}