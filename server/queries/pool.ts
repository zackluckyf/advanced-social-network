const { Pool, Client } = require('pg')

const CONNECTIONSTRING = process.env.DATABASE_URL;

let pool;

if(process.env.HEROKU){
    pool = new Pool({
        connectionString: CONNECTIONSTRING,
    });
} else {
    pool = new Pool({
        user: 'zackfanning',
        host: 'localhost',
        database: 'social_network',
        password: 'harrier',
        port: 5432,
    });
}

module.exports = {
  pool: pool
};