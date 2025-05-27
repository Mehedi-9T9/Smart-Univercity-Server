import { ZodError } from "zod"

 const simplifiedError =(error:ZodError)=>{
    return {
        statusCode:400,

      errorMessage :'Zod Validation Error',
path :error.issues[0].path.slice(-1)[0],
message :error.issues[0].message
    }

  }
  export default simplifiedError