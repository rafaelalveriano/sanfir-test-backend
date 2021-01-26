import { PersonType } from './person_type'
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
