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

@Resource("/customers", "customers")
export default class CustomersController {
  public async index(/* ... */) {
    // ...
  }
  
  @Middleware("auth")
  public async create(/* ... */) {
    // ...
  }
  
  @Middleware("auth")
  public async store(/* ... */) {
    // ...
  }
  
  public async show(/* ... */) {
    // ...
  }

  @Middleware("auth")
  public async edit(/* ... */) {
    // ...
  }

  @Middleware("auth")
  public async update(/* ... */) {
    // ...
  }

  @Middleware("auth")
  public async destroy(/* ... */) {
    // ...
  }
}
```



[npm-image]: https://img.shields.io/npm/v/@softwarecitadel/adonisjs-girouette.svg?style=for-the-badge&logo=npm
[npm-url]: https://npmjs.org/package/@softwarecitadel/adonis-girouette "npm"

[license-image]: https://img.shields.io/npm/l/@softwarecitadel/adonisjs-girouette?color=blueviolet&style=for-the-badge
[license-url]: LICENSE.md "license"

[typescript-image]: https://img.shields.io/badge/Typescript-294E80.svg?style=for-the-badge&logo=typescript
[typescript-url]:  "typescript"
