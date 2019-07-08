### Canny in open source

This project want to be a lite clone of canny.io website version.

The website will be fully written in english with a lang.ts library at the packages/common/lang/en.ts directory location.

The stack of the project will be:
- Typescript server with:
    - [koa](https://github.com/koajs/koa)
    - [typeorm](https://github.com/typeorm/typeorm)
    - [validator](https://github.com/validatorjs/validator.js)
- Typescript common library shared between the server and the client
- Typescript react client
- PostgresSQL database


#### What's canny

Canny is a product that: "Capture feedback in one organized place to inform your product decisions."

Their website: https://canny.io/

#### Running

```
git clone https://github.com/alexisvisco/canny-os.git
cd canny-os
make build (will run: yarn install and yarn build in each packages)

make start-server
make start-client
```


#### Features

Coming soom