import { Router } from 'express'
import { list, store } from './person_action'
const route = '/person/:id?'

export default (router: Router) => {
    router.get(route, list)
    router.post(route, store)
    return router
}
