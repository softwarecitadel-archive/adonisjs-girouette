# Girouette

> Girouette is a AdonisJS package providing decorators to handle routing.

[![npm-image]][npm-url] [![license-image]][license-url] [![typescript-image]][typescript-url]

## Installation

```bash
npm install @softwarecitadel/adonisjs-girouette
node ace configure @softwarecitadel/adonisjs-girouette
```

## Usage

```typescript
// CustomersController.ts
import { Get, Post, Patch, Delete, Middleware } from "@ioc:SoftwareCitadel/Girouette"

export default class CustomersController {
  @Get("/customers", "customers.index")
  public async index(/* ... */) {
    // ...
  }
  
  @Get("/customers/create", "customers.create")
  @Middleware("auth")
  public async create(/* ... */) {
    // ...
  }
  
  @Post("/customers", "customers.store")
  @Middleware("auth")
  public async store(/* ... */) {
    // ...
  }
  
  @Get("/customers/:id", "customers.show")
  @Where("id", /^[0-9]+$/)
  public async show(/* ... */) {
    // ...
  }

  @Get("/customers/:id/edit", "customers.edit")
  @Where("id", /^[0-9]+$/)
  @Middleware("auth")
  public async edit(/* ... */) {
    // ...
  }

  @Patch("/customers/:id", "customers.update")
  @Where("id", /^[0-9]+$/)
  @Middleware("auth")
  public async update(/* ... */) {
    // ...
  }

  @Delete("/customers/:id", "customers.destroy")
  @Where("id", /^[0-9]+$/)
  @Middleware("auth")
  public async destroy(/* ... */) {
    // ...
  }
}
```

### Resourceful controller

```typescript
// CustomersController.ts
import { Resource } from "@ioc:SoftwareCitadel/Girouette"

@Resource("/customers", "customers", {"*": "auth"})
export default class CustomersController {
  public async index(/* ... */) {
    // ...
  }
  
  public async create(/* ... */) {
    // ...
  }
  
  public async store(/* ... */) {
    // ...
  }
  
  public async show(/* ... */) {
    // ...
  }

  public async edit(/* ... */) {
    // ...
  }

  public async update(/* ... */) {
    // ...
  }

  public async destroy(/* ... */) {
    // ...
  }
}
```

You can also create a resource that is API only.

```typescript
// CustomersController.ts
import { ApiOnly, Resource } from "@ioc:SoftwareCitadel/Girouette"

@Resource("/users", "users")
@ApiOnly()
export default class CustomersController {
  // ...
}
```

#### Filtering routes

You can restrict specific methods using the `@Except` decorator.

```typescript
// CustomersController.ts
import { Except, Resource } from "@ioc:SoftwareCitadel/Girouette"

@Resource("/users", "users")
@Except(["store", "update", "destroy"])
export default class CustomersController {
  // ...
}
```

The opposite of `@Except` decorator is the `@Only` decorator which can be used to register only the methods you want.

```typescript
// CustomersController.ts
import { Only, Resource } from "@ioc:SoftwareCitadel/Girouette"

@Resource("/users", "users")
@Only(["index", "show"])
export default class CustomersController {
  // ...
}
```


[npm-image]: https://img.shields.io/npm/v/@softwarecitadel/adonisjs-girouette.svg?style=for-the-badge&logo=npm
[npm-url]: https://npmjs.org/package/@softwarecitadel/adonis-girouette "npm"

[license-image]: https://img.shields.io/npm/l/@softwarecitadel/adonisjs-girouette?color=blueviolet&style=for-the-badge
[license-url]: LICENSE.md "license"

[typescript-image]: https://img.shields.io/badge/Typescript-294E80.svg?style=for-the-badge&logo=typescript
[typescript-url]:  "typescript"
