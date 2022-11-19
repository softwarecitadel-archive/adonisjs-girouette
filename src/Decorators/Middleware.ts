export const Middleware = (middleware: string) => {
  return (target: any, propertyKey: string) => {
    let routes = Reflect.getMetadata('__routes__', target) || {}
    const newData = { middleware }
    routes[propertyKey] = routes[propertyKey] ? { ...newData, ...routes[propertyKey] } : newData

    Reflect.defineMetadata('__routes__', routes, target)
  }
}
