import mongoose from "mongoose";

const castErrorHandle =(error:mongoose.Error.CastError)=>{
    return {
        statusCode:400,
        errorMessage:"CastError",
        path:error.path,
        message:error.message
    }
}
export default castErrorHandle