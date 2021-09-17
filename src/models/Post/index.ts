import { Schema, model } from 'mongoose'
import {IPost } from '../../types'

const schema = new Schema<IPost>({
    title: { type: String, required: true },
    text: { type: String, required: true,},
    image: { type: String },
    tag: []
},{
    timestamps: true,
})

export const postModel = model('Post',schema)