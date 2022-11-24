export const Resource = (pattern: string) => {
  return (target: any) => {
    Reflect.defineMetadata('__resource__', pattern, target)
  }
}
