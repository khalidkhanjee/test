"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.knex = void 0;
const index_1 = require("./index");
exports.knex = require("knex")({
    client: index_1.DB_CLIENT,
    connection: {
        host: index_1.DB_HOST,
        port: index_1.DB_PORT,
        user: index_1.DB_USER,
        password: index_1.DB_PASS,
        database: index_1.DB_NAME,
    },
});
