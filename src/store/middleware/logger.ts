import { Middleware } from 'redux'

export const logger: Middleware = _ => next => (action: any) => {
  console.log(action)
  return next(action)
}
