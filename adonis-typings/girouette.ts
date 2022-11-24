declare module '@ioc:SoftwareCitadel/Girouette' {
  type RouteDecorator = (
    pattern: string,
    name?: string
  ) => (target: any, propertyKey: string, descriptor: PropertyDescriptor) => void
  const Delete: RouteDecorator
  const Get: RouteDecorator
  const Patch: RouteDecorator
  const Post: RouteDecorator
  const Put: RouteDecorator

  const Middleware: (
    middleware: string
  ) => (target: any, propertyKey: string, descriptor: PropertyDescriptor) => void

  const Resource: (pattern: string, name?: string) => (target: any) => void

  export { Delete, Get, Patch, Post, Put, Middleware, Resource }
}
