import { Request, Response } from 'express'
import { PersonType } from './personType'
import { storePerson, listPerson } from './personRepository'
import Error from '../../common/error'

export const list = async (req: Request, res: Response) => {
    const persons = await listPerson()
    res.send(persons)
}

export const store = async (req: Request, res: Response) => {
    const data: PersonType = req.body

    const person = await storePerson(data)
    if (!person) return Error(res).error500('Error ao registrar os dados')
    res.send(data)
}
