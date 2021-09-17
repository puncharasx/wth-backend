import { FilterQuery } from 'mongoose'

export type Filter<T> = FilterQuery<T>

export interface IPost {
    _id?: string
    title?: string
    text?: string
    image?: string
    tag?: string[]
}

export interface IUserLogin {
    username: string
    password: string
}

export interface IUser {
    _id?: string
    username: string
    password: string
}

export interface IPostInput {
    title?: string
    text?: string
    image?: string
    tag?: string[]
}

export class HttpException extends Error {
    status: number;
    message: string;
    constructor(status: number, message: string) {
      super(message);
      this.status = status;
      this.message = message;
    }
}

