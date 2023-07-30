import { ResourceRouteNames } from '@ioc:Adonis/Core/Route'

export const Except = (names: ResourceRouteNames[]) => {
  return (target: any) => {
    Reflect.defineMetadata('__resource_except__', names, target)
  }
}
