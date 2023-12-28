## Description
Backend for Bitmosys-q423.

## Features
- [x] Swagger UI
- [x] Automatic API Documentation
- [x] Automatic API Testing
- [x] Automatic building and pushing of docker image to docker hub
- [x] Automatic deployment to render.com

## Links
[Frontend](https://bitmosys-q423.vercel.app)

[API Documentation](https://sagyam.github.io/bitmosys-q423-api)

[Swagger UI](https://bitmosys-q423.vercel.app/api)

## DB Schema
![DB Schema](https://raw.githubusercontent.com/Sagyam/bitmosys-q423-api/38d7730d5b16952b1cc167765728eba40fa72a7f/schema.svg)

## Installation

```bash
$ pnpm install
```

## Running the app

```bash
# development
$ pnpm run start

# watch mode
$ pnpm run start:dev

# production mode
$ pnpm run start:prod
```

## Test

```bash
# unit tests
$ pnpm run test

# e2e tests
$ pnpm run test:e2e

# test coverage
$ pnpm run test:cov
```
