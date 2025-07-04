import QueryBuilder from "../../app/builders/queryBuilders";
import { TFaculty } from "./faculty.interface";
import FacultyModel from "./faculty.schema.model";

const createFacultyIntoDB = async (payload: TFaculty) => {
    const result = await FacultyModel.create(payload)
    return result
}
const getAllFacultyIntoDB = async (query: Record<string, unknown>) => {

    const searchableField = ['education']
    // let searchTerm: {} = ' ';
    // if (query?.searchTerm) {
    //     searchTerm = query?.searchTerm
    // }

    //parsial match for search,
    // const searchQuery = FacultyModel.find({
    //     $or: ['education'].map((field) => ({
    //         [field]: { $regex: searchTerm, $options: 'i' }
    //     }))

    // })


    //exact Match for search
    // const queryObj = { ...query }
    // const excludes = ['searchTerm', 'sort', 'limit']
    // excludes.forEach((element) => delete queryObj[element])
    // console.log(query, queryObj, 'queries is console');
    // const filterQuary = searchQuery.find(queryObj)

    // For sort quary
    // let sort = '-createdAt';
    // if (query?.sort) {
    //     sort = query?.sort as string
    // }
    // const sortQuery = filterQuary.sort(sort)


    //For limit uses
    // let limit = 0
    // if (query?.limit) {
    //     limit = Number(query?.limit)
    // }
    // const limitQuery = await sortQuery.limit(limit)
    // return limitQuery


    const facultyQuery = new QueryBuilder(FacultyModel.find(), query).search(searchableField).filter().sort()
    const result = await facultyQuery.modelQuery
    return result
}
export const facultyServices = {
    createFacultyIntoDB,
    getAllFacultyIntoDB
}