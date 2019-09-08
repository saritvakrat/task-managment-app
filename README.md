## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.
A task management app based on nestjs

## Prerequisite
- Nodejs
- TypeScript
- Valut: https://www.vaultproject.io/downloads.html
- pg admin
- postgress DB

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## API documentations
Run - npm run apidocs
This will generate a folder called "docs" in root -> inside of it there an index.html, you can open this in the browser and get an HTML readable documentation.

Do note this folder is in .gitignore

## What we have?
- A simple authenticated task management application

# Tasks API
- POST http://localhost:3000/tasks
body:
```
{
  "title": "my task",
  "description": "Clean the house!",
}
```
- GET  http://localhost:3000/tasks?description=adfdf - ability to filter by status, description, title or a combination of them
- http://localhost:3000/tasks/14 - get a task by id
- DELETE http://localhost:3000/tasks/4
- PATCH http://localhost:3000/tasks/14/status
body:
```
{
	"status" : "DONE"
}
```
# Authentication API
-  POST http://localhost:3000/auth/signup
body:
```
{
"username" : "myuser",
"password" : "123456891!aA"
}
```
- POST http://localhost:3000/auth/signin 
body:
```
{
"username" : "myuser",
"password" : "123456891!aA"
}
```