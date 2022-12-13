export const Middleware = (middleware: string | Array<string>) => {
  return (target: any, propertyKey: string) => {
    let routes = Reflect.getMetadata('__routes__', target) || {}
    if (!routes[propertyKey]) {
      routes[propertyKey] = {}
    }
    if (!routes[propertyKey].middleware) {
      routes[propertyKey].middleware = []
    }

    if (Array.isArray(middleware)) {
      for (const item of middleware) {
        routes[propertyKey].middleware.push(item)
      }
    } else {
      routes[propertyKey].middleware.push(middleware)
    }

    Reflect.defineMetadata('__routes__', routes, target)
  }
}
