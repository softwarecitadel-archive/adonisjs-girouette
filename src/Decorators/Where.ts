import { RouteMatchersContract } from '@ioc:Adonis/Core/Route'

export const Where = (key: string, matcher: string | RegExp | RouteMatchersContract) => {
  return (target: any, propertyKey: string) => {
    let routes = Reflect.getMetadata('__routes__', target) || {}
    const newWhere = { key, matcher }

    if (!routes[propertyKey]) {
      routes[propertyKey] = {}
    }

    if (!routes[propertyKey].where) {
      routes[propertyKey].where = [newWhere]
    } else {
      routes[propertyKey].where.push(newWhere)
    }

    Reflect.defineMetadata('__routes__', routes, target)
  }
}
