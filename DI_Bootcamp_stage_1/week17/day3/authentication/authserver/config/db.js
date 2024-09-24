const knex = require('knex');
require('dotenv').config();

const { PGHOST,PGDATABASE, PGUSER, PGPASSWORD, PGPORT } = process.env;

module.exports = {
    db: knex({
        client: 'pg',
        connection: {
            host: PGHOST,
            port: PORT,
            user: PGUSER,
            database: PGDATABASE,
            password: PGPASSWORD,

            //Remember to remove when on production 
            // ssl: PROD ? {rejectUnauthorized:false} : false,
            ssl:{rejectUnauthorized:false}
        }
    })
}