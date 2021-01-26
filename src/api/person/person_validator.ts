import * as yup from 'yup'
import { ValidatorSchema } from '../../middleware'

const schema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email(),
    birthdata: yup.string().required(),
    uf: yup.string().required(),
    city: yup.string().required(),
})

export default ValidatorSchema(schema)
