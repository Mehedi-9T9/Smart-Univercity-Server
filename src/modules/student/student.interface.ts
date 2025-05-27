import { Types } from "mongoose";


export type TStudent ={
    userId:string,
    user:Types.ObjectId,
    academicSemister:Types.ObjectId,
    academicDepartment:Types.ObjectId,
    firstName:string,
    lastName:string,
    FatherName:string,
    motherName:string,
    gender:string,
    dateOfBirth:string,
    email:string,
    contactNo:string,
    distric:string,
    division:string,
    relision:string,

}