import { z } from 'zod';

const studentValidationSchema = z.object({
  userId: z.string().optional(),
  user: z.string().optional(), // ObjectId as a string
  firstName: z.string(),
  lastName: z.string().nonempty({ message: "Last name is required" }),
  FatherName: z.string().nonempty({ message: "Father's name is required" }),
  motherName: z.string().nonempty({ message: "Mother's name is required" }),
  gender: z.string().nonempty({ message: "Gender is required" }),
  dateOfBirth: z.string().nonempty({ message: "Date of birth is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  contactNo: z.string().nonempty({ message: "Contact number is required" }),
  distric: z.string().nonempty({ message: "District is required" }),
  division: z.string().nonempty({ message: "Division is required" }),
  relision: z.string().nonempty({ message: "Religion is required" }),
});

export default studentValidationSchema;