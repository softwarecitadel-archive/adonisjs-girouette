export const Resource = (pattern: string, name?: string) => {
  return (target: any) => {
    Reflect.defineMetadata('__resource__', pattern, target)
    if (name) {
      Reflect.defineMetadata('__resource_name__', name, target)
    }
  }
}
