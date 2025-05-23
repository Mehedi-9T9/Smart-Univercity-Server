import mongoose, { Schema } from "mongoose";

const facultySchema = new Schema({
  name: { type: String, required: true },
  education: { type: String, required: true },

});
const FacultyModel = mongoose.model('Faculty', facultySchema);
export default FacultyModel
