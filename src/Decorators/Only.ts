import { ResourceRouteNames } from '@ioc:Adonis/Core/Route'

export const Only = (names: ResourceRouteNames[]) => {
  return (target: any) => {
    Reflect.defineMetadata('__resource_only__', names, target)
  }
}
