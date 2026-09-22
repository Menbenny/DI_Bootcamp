const knex = require('knex');
require('dotenv').config();

const { DB_PGHOST,DB_NAME, DB_PGUSER, DB_PASSWORD, DB_PORT } = process.env;

export const db = knex({
    client: 'pg',
    connection: {
        host: DB_PGHOST,
        port: DB_PORT,
        user: DB_PGUSER,
        database: DB_NAME,
        password: DB_PASSWORD,
        
        ssl:{rejectUnauthorized:false}
    },
});
