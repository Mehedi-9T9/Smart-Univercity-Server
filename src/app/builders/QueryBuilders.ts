import { FilterQuery, Query } from "mongoose"

class QueryBuilder<T> {
    public modelQuery: Query<T[], T>
    public query: Record<string, unknown>

    constructor(modelQuery: Query<T[], T>, query: Record<string, unknown>) {
        this.modelQuery = modelQuery;
        this.query = query

    }

    search(searchableField: string[]) {

        // let searchTerm: {} = ' ';
        if (this.query?.searchTerm) {
            this.modelQuery = this.modelQuery.find({
                $or: searchableField.map((field) => ({
                    [field]: { $regex: this.query?.searchTerm, $options: 'i' }
                }) as FilterQuery<T>)

            })
        }
        return this

    }


    filter() {
        const queryObj = { ...this.query }
        const excludesFields = ['searchTerm', 'sort', 'limit']
        excludesFields.forEach((element) => delete queryObj[element])

        // console.log(this.query, queryObj, 'queries is console');
        this.modelQuery = this.modelQuery.find(queryObj)
        return this
    }

    sort() {
        let sort = '-createdAt';
        if (this.query?.sort) {
            sort = this.query?.sort as string
        }
        this.modelQuery = this.modelQuery.sort(sort)
        return this
    }

}
export default QueryBuilder