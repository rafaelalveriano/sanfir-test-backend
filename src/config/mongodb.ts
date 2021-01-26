import mongoose from 'mongoose'
import * as dotenv from 'dotenv'
dotenv.config()

const uri = process.env.MONGO_URI || 'mongodb://localhost/localdatabase'

export const ConnectMongoDb = async () => {
    try {
        await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
    } catch (err) {
        console.log(err)
        console.log('error connect ')
    }
}

export const close = async () => {
    try {
        await mongoose.disconnect()
    } catch (error) {
        console.log('error when close connection mongo db ')
    }
}
