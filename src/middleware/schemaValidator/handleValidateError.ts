import { Response } from 'express'
import { send } from 'process'
import { ValidationError } from 'yup'

export default (error: ValidationError, res: Response) => {
    const sendError = (msg: string) => res.status(400).json({ error: msg })

    if (error.message === 'email must be a valid email')
        return sendError('O email inserido é inválido!')

    if (error.type === 'required')
        return sendError(`Preencha o campo ${error.path}`)

    return sendError(error.message)
}
