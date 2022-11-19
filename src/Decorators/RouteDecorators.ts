import 'reflect-metadata'

const RouteDecorator = (method: string) => (pattern: string, name?: string) => {
  return (target: any, propertyKey: string, _descriptor: PropertyDescriptor) => {
    let routes = Reflect.getMetadata('__routes__', target) || {}
    const newRoute = { method, name, pattern }
    routes[propertyKey] = routes[propertyKey] ? { ...newRoute, ...routes[propertyKey] } : newRoute

    Reflect.defineMetadata('__routes__', routes, target)
  }
}

export const Get = RouteDecorator('GET')
export const Post = RouteDecorator('POST')
export const Put = RouteDecorator('PUT')
export const Patch = RouteDecorator('PATCH')
export const Delete = RouteDecorator('DELETE')
