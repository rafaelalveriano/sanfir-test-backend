import express, { Request, Response, Router } from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import registerRouter from './registerRouter'

const Server = () => {
    const app = express()
    app.use(cors())
    app.use(bodyParser.json())

    const port = process.env.PORT || 3001

    registerRouter(app, Router())

    app.get('/', (req: Request, res: Response) => res.send('on'))

    console.log('server run')
    return app.listen(port)
}

export default Server
