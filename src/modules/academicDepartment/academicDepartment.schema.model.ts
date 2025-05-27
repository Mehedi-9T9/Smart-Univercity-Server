import mongoose, { Schema } from "mongoose";
import AppError from "../../app/errors/appError";
import { optional } from "zod";

const  academicDepartmentSchema = new Schema({
  name: { type: String, required: true,unique:true, optional:true },
  academicFaculty: { type: Schema.Types.ObjectId, required: true, ref:'Faculty' ,optional:true},
 

}, {timestamps:true});

//Middleware
academicDepartmentSchema.pre("save",async function (next){
const isExist =await AcademicDepartmentModel.findOne({name:this.name})
if(isExist){
  throw new AppError(404,'The Department already Exists')
}
next()

})



//Model 
// export const AcademicDepartmentUpdateModel = mongoose.model('Department', academicDepartmentUpdateSchema);


export const AcademicDepartmentModel = mongoose.model('Department', academicDepartmentSchema);

