import { Router } from 'express'
import { list, store } from './person_action'
import Validator from './person_validator'
const route = '/person/:id?'

export default (router: Router) => {
    router.get(route, list)
    router.post(route, Validator, store)
    return router
}
