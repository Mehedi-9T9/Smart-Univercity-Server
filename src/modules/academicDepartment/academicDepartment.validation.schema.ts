import { z } from "zod"; 
 
export const academicDepartmentValidationSchema = z.object({ 
  name: z.string().optional(),
  academicFaculty: z.string()
});