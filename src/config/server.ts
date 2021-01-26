import express, { Request, Response, Router } from 'express'
import bodyParser from 'body-parser'
import registerRouter from './registerRouter'

const Server = () => {
    const app = express()
    app.use(bodyParser.json())

    const port = process.env.PORT || 3000

    registerRouter(app, Router())

    app.get('/', (req: Request, res: Response) => res.send('on'))

    console.log('server run')
    return app.listen(port)
}

export default Server
