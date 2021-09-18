# POSTGRESQL using Sequelize CLI on Node.js Express

This is a practise tutorial to understand using the Sequelize CLI package with Node.js Express.

## Credits

Classsed [https://www.youtube.com/watch?v=3qlnR9hK-lQ](https://www.youtube.com/watch?v=3qlnR9hK-lQ).

## Dependencies

Nodemon is used in dev enviroment.

```
npm i express dotenv colors cors sequelize pg pg-hstore
npm i -g sequelize-cli
npm i -D nodemon
```

## sequelize-cli command line

Generate Database

```
sequelize db:create
```

Delete Database

```
sequelize db:drop
```

Create model for table

```
sequelize model:generate --name User --attributes name:string, email:string, role:string
```

Create tables (default is to public schema)

```
sequelize db:migrate
```

Status of migrated tables

```
sequelize db:migrate:status
```

Delete all tables

```
sequelize db:migrate:undo:all
```

Create seeder

```
sequelize seed:generate --name create-fake-users
```

Populate table

```
sequelize db:seed:all
```
