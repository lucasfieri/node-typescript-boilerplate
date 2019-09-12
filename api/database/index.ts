const migrationsPath = require('path').resolve(__dirname, 'migrations');
const seedsPath = require('path').resolve(__dirname, 'seeds');
import * as knex from 'knex';
const database = {
  client: 'pg',
  connection: {
    host: process.env.INSTANCE_CONNECTION_NAME,
    user: process.env.SQL_USER,
    password: process.env.SQL_PASSWORD,
    database: process.env.SQL_DATABASE,
  },
  pool: { min: 1, max: 20 },
  migrations: {
    directory: migrationsPath,
  },
  seeds: {
    directory: seedsPath,
  },
} as knex.Config;

export = database;
