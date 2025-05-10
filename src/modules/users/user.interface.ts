export type TUser ={
    userId:string,
    // password:string,
    role: 'admin'| 'teacher' | 'student',
    status:'in-progress'| 'blocked',
    // isDeleted:boolean
}