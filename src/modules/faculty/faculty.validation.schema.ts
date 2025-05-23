import { z } from "zod"; 
 
export const facultyValidationSchema= z.object({ 
  name: z.string(),
  education: z.string()
});