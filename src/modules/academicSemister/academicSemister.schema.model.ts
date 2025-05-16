import { model, Schema } from "mongoose";
import { TAcademicSemister } from "./academicSemister.interface";

const months: string[] = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
const academicSemisterSchema = new Schema<TAcademicSemister>({
  name: { type: String,enum:['Autom','Summer','Fall'], required: true },
  semisterCode: { type: String,enum:['01','02','03'], required: true },
  year:{type:Date,required:true},
  startMonth:{type:String, required:true,enum:months},
  endMonth:{type:String,required:true,enum:months}
  
});
academicSemisterSchema.pre('save',async function (next) {
    const isExist =await AcademicSemisterModel.findOne({name:this.name,year:this.year })
    if(isExist){
        throw new Error("Sorry You can`T Admission")
    }
    next()
})
const AcademicSemisterModel = model<TAcademicSemister>('AcademicSemister', academicSemisterSchema);
export default AcademicSemisterModel;