import Server from './config/server'
import { ConnectMongoDb } from './config/mongodb'

ConnectMongoDb()
    .then(() => Server())
    .catch((err) => {
        console.log(err)
        console.log('connection mongodb failed')
    })
