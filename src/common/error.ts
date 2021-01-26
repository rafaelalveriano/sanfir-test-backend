import { Response } from 'express'
export default (res: Response) => ({
    error404: (msg: string) => res.status(404).send({ error: msg }),
    error401: (msg: string) => res.status(401).send({ error: msg }),
    error500: (msg: string) => res.status(500).send({ error: msg }),
    errorLogin: () =>
        res.status(401).send({ error: 'Usuário ou senha incorreto' }),
})
