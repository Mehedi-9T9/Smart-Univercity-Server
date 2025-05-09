import {z} from 'zod'


export const userValidationSchema = z.object({
  id: z.string(),
  password: z.string(),
   role: z.enum(['admin','teacher', 'student']),
    status:z.enum(['in-progress', 'blocked']),
    isDeleted:z.boolean(),
});
