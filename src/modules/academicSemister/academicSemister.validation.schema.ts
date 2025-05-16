import { z } from "zod";

// Month array
const months = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
] as const;

// Zod schema for academic semester
const academicSemisterValidationSchema = z.object({
  name: z.enum(["Autom", "Summer", "Fall"]),
  semisterCode: z.enum(["01", "02", "03"]),
  year: z.coerce.date(), // Coerce to Date type
  startMonth: z.enum(months),
  endMonth: z.enum(months),
});
export default academicSemisterValidationSchema;