const knex = require('knex')
require('dotenv').config();

//# Do not expose your Neon credentials to the browser

// const PGHOST='ep-silent-cherry-a5ik57jg.us-east-2.aws.neon.tech'    
// const PGDATABASE='neondb'
// const PGUSER='neondb_owner'
// const PGPASSWORD='U7AVHfsv3GBJ'
// const PGPORT= 5432

// since the values above are in an object - we destruction in order to retrieve the data

const { PGHOST, PGDATABASE, PGUSER, PGPASSWORD, PGPORT } = process.env;

// in knex - object with all connection strings
const db = knex({
    client: 'pg',
    connection: {
        host: PGHOST,
        port: PGPORT,
        user: PGUSER,
        database: PGDATABASE,
        password: PGPASSWORD,
        // For global/online - not local databse
        ssl: { rejectUnaithorized: false },
    },
});

module.exports = {
    db, 
};