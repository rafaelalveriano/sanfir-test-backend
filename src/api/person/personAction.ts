import { Request, Response } from 'express'
import { PersonType } from './personType'
import {
    storePerson,
    listPerson,
    updatePerson,
    removePerson,
} from './personRepository'
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

export const update = async (req: Request, res: Response) => {
    const { id } = req.params
    const data: PersonType = req.body

    const person = await updatePerson(data, id)
    if (!person) return Error(res).error500('Error ao atualizazr os dados')
    res.status(200).send()
}

export const remove = async (req: Request, res: Response) => {
    const { id } = req.params

    const person = await removePerson(id)
    if (!person) return Error(res).error500('Error ao remover o registro')
    res.status(200).send()
}
