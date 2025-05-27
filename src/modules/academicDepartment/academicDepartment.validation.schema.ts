import { z } from "zod"; 
 
export const academicDepartmentValidationSchema = z.object({ 
  name: z.string({
    required_error: "Name is required", 
  }),
  academicFaculty: z.string()
});