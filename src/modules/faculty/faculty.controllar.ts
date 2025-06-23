import { Request, RequestHandler, Response } from "express";
import { facultyServices } from "./faculty.services";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";

const createFaculty: RequestHandler = catchAsync(async (req: Request, res: Response) => {
    const result = await facultyServices.createFacultyIntoDB(req.body)
    sendResponse(res, { statusCode: 200, message: "Faculty Create Successfull", success: true, data: result })
})


const getAllFaculty: RequestHandler = catchAsync(async (req: Request, res: Response) => {
    console.log(req.query, 'quary is console');
    const result = await facultyServices.getAllFacultyIntoDB(req.query)
    sendResponse(res, { statusCode: 200, message: "Faculty Create Successfull", success: true, data: result })
})
export const facultyControllar = {
    createFaculty,
    getAllFaculty
}