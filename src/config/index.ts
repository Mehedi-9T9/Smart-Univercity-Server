import dotenv from 'dotenv'
import path from 'path'

dotenv.config({path:path.join(process.cwd(),".env")})
export default{
    PORT :process.env.PORT,
    DATABASE_URI :process.env.DATABASE_URI,
    NODE_ENV: process.env.NODE_ENV
}