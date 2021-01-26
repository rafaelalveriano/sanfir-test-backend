import { Request, Response, NextFunction } from 'express'
import { AnyObjectSchema, ValidationError } from 'yup'
import HandleValidateError from './handleValidateError'

export default (schema: AnyObjectSchema) => async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        await schema.validate(req.body)
        next()
    } catch (error) {
        const err: ValidationError = error
        HandleValidateError(err, res)
    }
}
