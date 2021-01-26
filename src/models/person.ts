import mongoose from 'mongoose'

const Schema = mongoose.Schema

const CustomerSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    birthdata: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    uf: {
        type: String,
        required: true,
    },
})

export default mongoose.model('person', CustomerSchema)
