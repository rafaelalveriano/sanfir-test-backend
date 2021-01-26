import { Router } from 'express'
import { list, store } from './personAction'
import Validator from './personValidator'
const route = '/person/:id?'

export default (router: Router) => {
    router.get(route, list)
    router.post(route, Validator, store)
    return router
}
