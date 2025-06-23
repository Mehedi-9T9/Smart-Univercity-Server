import { RequestHandler } from 'express';
import { studentServices } from './student.services';
import sendResponse from '../../utils/sendResponse';
import catchAsync from '../../utils/catchAsync';


const getAllStudent: RequestHandler = catchAsync(async (req, res) => {
    const result = await studentServices.getAllStudentIntoDB()
    sendResponse(res, { statusCode: 200, message: 'All Student Get', success: true, data: result })
})
export const studentControllar = {
    getAllStudent
}