import { Request, NextFunction, Response } from 'express'
import { httpStatusCode } from '../../untils'
import { IPostInput } from '../../types'
import { postService } from '../../services'
import faker from 'faker'
export const postController = {

    getAll: async (req: Request, res : Response, next: NextFunction) => {
        try {
            const data = await postService.findAll()
            res.status(httpStatusCode.OK).json({
                data: data
            })
        } catch (err) {
            next(err)
        }
    },

    get: async (req: Request, res : Response, next: NextFunction) => {
        try {
           const data = await postService.find({ _id: req.params.id })
           res.status(httpStatusCode.OK).json({
               data: data
           })
        } catch(err){
            next(err)
        }
    },

    create: async (req: Request, res : Response, next: NextFunction) => {
        const data: IPostInput = {
            title: req.body.title,
            text: req.body.text,
            image: req.body.image,
            tag: req.body.tag
        }
        try {
            const post = await postService.create(data)
            res.status(httpStatusCode.CREATED).json({
                message: 'Created',
                data: post
            })
            
        } catch(err){
            next(err)
        }
    },

    update: async (req: Request, res : Response, next: NextFunction) => {
        const data: IPostInput = {
            title: req.body.title,
            text: req.body.text,
            image: req.body.image,
            tag: req.body.tag
        }
        try {
            const doc = await postService.update({ _id: req.params.id },data)
            res.status(httpStatusCode.OK).json({
                message: 'Update Completed'
            })
        } catch(err){
            next(err)
        }
    },

    delete: async (req: Request, res : Response, next: NextFunction) => {
        try {
            const doc = await postService.delete({_id: req.params.id})
            res.status(httpStatusCode.OK).json({
                message: 'Delete Completed'
            })
        } catch(err){
            next(err)
        }
    },

    generate: async (req: Request, res : Response, next: NextFunction) => {
        const count: number = parseInt(req.params.count)
        try {
            for(let i = 0; i < count; i++) {
                const random = {
                    title: faker.name.findName(),
                    text: faker.lorem.text(),
                    image: faker.image.avatar()
                }
                await postService.create(random)
            }
            res.status(httpStatusCode.OK).json({})
        }catch(err){
            next(err)
        }

    }
}