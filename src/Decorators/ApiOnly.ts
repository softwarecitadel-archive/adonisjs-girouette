export const ApiOnly = () => {
  return (target: any) => {
    Reflect.defineMetadata('__resource_api_only__', true, target)
  }
}
