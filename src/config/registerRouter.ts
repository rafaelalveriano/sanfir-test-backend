import { Express, Router } from 'express'
import { PersonRoute } from '../api/person'

export default (app: Express, router: Router) => {
    const apiV1 = '/api/'
    app.use(apiV1, PersonRoute(router))
}
