import mongoose, { Schema } from "mongoose";

const  academicDepartmentSchema = new Schema({
  name: { type: String, required: true },
  academicFaculty: { type: Schema.Types.ObjectId, required: true },
 

}, {timestamps:true});
const AcademicDepartmentModel = mongoose.model('Department', academicDepartmentSchema);
export default AcademicDepartmentModel
