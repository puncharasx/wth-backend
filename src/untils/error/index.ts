import {Request, Response, NextFunction} from "express";
import { httpStatusCode } from '../httpStatusCode'
import { HttpException } from '../../types';

export const errorHandler = (err: HttpException ,req: Request, res:Response, next:NextFunction) => {
    const status = err.status || httpStatusCode.INTERNAL_SERVER
    const message = err.message || "Someting went wrong";

    res
    .status(status)
    .json({
        statusCode: status,
        message: message,
    })

}
