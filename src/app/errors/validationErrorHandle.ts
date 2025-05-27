import mongoose from "mongoose";

const validationError =(err:mongoose.Error.ValidationError)=>{
 let path =''
 let message = ''
 Object.values(err.errors).map((val)=>{
path =val?.path
message =val.message
 })

 return {
    statusCode:400,
    errorMessage :'Validation Error',
    path ,
    message
 }
}
export default validationError;