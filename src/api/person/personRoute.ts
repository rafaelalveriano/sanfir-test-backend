import { Router } from 'express'
import { list, store, update, remove } from './personAction'
import Validator from './personValidator'
const route = '/person/:id?'

export default (router: Router) => {
    router.get(route, list)
    router.post(route, Validator, store)
    router.put(route, Validator, update)
    router.delete(route, remove)
    return router
}
