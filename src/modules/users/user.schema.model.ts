import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
  id: { type: String, required: true },
  password: { type: String, required: true },
  role:{
    type:String,
    enum:["admin","teacher","student"],
    required:true
  },
  status:{
    type:String,
    enum:["in-progress","blocked"],
    required:true
  },
  isDeleted:{
    type:Boolean,
    default:false
  }
});
const UserModel = mongoose.model('User', userSchema);
export default UserModel;