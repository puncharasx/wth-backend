import { postModel } from '../../models'
import { Filter, IPost, IPostInput } from '../../types'


export const postService = {
    findAll: async (): Promise<IPost[]> => {
        const docs = await postModel.find().sort({ _id: -1 })
        if(!docs) return null
        return docs
    },

    find: async (filter: Filter<IPost> ): Promise<IPost> => {
            const doc = await postModel.findOne(filter)
            return doc 
    },

    create: async (input: IPostInput): Promise<null> => {
        const doc = new postModel(input)
        const result = await doc.save()
        return result
    },

    update: async (filter: Filter<IPost>,input: IPostInput): Promise<null> => {
        const doc = await postModel.findOneAndUpdate(filter, input)
        return null
    },

    delete: async (filter: Filter<IPost>): Promise<any> => {
        const doc = await postModel.findOneAndDelete(filter)
        return null
    },

}