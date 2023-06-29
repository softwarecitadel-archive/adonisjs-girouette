import { ResourceRouteNames, RouteMiddlewareHandler } from '@ioc:Adonis/Core/Route'

export const Resource = (
  pattern: string,
  name?: string,
  middleware?: {
    [P in ResourceRouteNames]?: RouteMiddlewareHandler | RouteMiddlewareHandler[]
  } & {
    '*'?: RouteMiddlewareHandler | RouteMiddlewareHandler[]
  }
) => {
  return (target: any) => {
    Reflect.defineMetadata('__resource__', pattern, target)
    if (name) {
      Reflect.defineMetadata('__resource_name__', name, target)
    }
    if (middleware) {
      Reflect.defineMetadata('__resource_middleware__', middleware, target)
    }
  }
}
