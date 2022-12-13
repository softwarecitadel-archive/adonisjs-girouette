import { RouteParamMatcher } from '@ioc:Adonis/Core/Route'

type Metadata = {
  method: string
  name: string
  pattern: string
  propertyKey: string
  middleware?: string | Array<string>
  where?: Array<{
    key: string
    matcher: RouteParamMatcher
  }>
}

export default Metadata
