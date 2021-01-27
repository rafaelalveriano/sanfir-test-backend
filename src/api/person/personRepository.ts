import { PersonType } from './personType'
import PersonModel from '../../models/person'

export const listPerson = async () =>
    await PersonModel.find({}).sort({ _id: 'descending' })

export const storePerson = async (data: PersonType) => {
    try {
        return await PersonModel.create(data)
    } catch (error) {
        return false
    }
}

export const updatePerson = async (data: PersonType, id: string) => {
    try {
        return await PersonModel.updateOne({ _id: id }, data)
    } catch (error) {
        return false
    }
}

export const removePerson = async (id: string) => {
    try {
        return await PersonModel.deleteOne({ _id: id })
    } catch (error) {
        return false
    }
}
