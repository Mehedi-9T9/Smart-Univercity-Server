import mongoose, { model, Schema } from "mongoose";
import { TStudent } from "./student.interface";

const studentSchema = new Schema<TStudent>({
    userId:{type:String,},
    user:{type:Schema.Types.ObjectId,ref: 'User'},
    academicSemister:{type:Schema.Types.ObjectId, ref: 'AcademicSemister'},
    academicDepartment:{type:Schema.Types.ObjectId, ref: 'Department'},
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  FatherName: { type: String, required: true },
  motherName: { type: String, required: true },
  gender:{type:String,required:true},
  dateOfBirth:{type:String,required:true},
  email: { type: String, required: true },
  contactNo:{type:String,required:true},
  distric:{type:String,required:true},
  division:{type:String,required:true},
  relision:{type:String,required:true},
  
});

//passwork niye kaj korte hobe
const StudentModel = model<TStudent>('Student', studentSchema);
export default StudentModel;