import {
  APP_PORT,
  DB_PORT,
  DB_HOST,
  DB_CLIENT,
  DB_USER,
  DB_PASS,
  DB_NAME,
} from "./index";

export const knex = require("knex")({
  client: DB_CLIENT,
  connection: {
    host: DB_HOST,
    port: DB_PORT,
    user: DB_USER,
    password: DB_PASS,
    database: DB_NAME,
  },
});
