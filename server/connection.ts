const { Pool, Client } = require('pg')

const CONNECTIONSTRING = process.env.DATABASE_URL;

if(process.env.HEROKU){
    const pool = new Pool({
        connectionString: CONNECTIONSTRING,
    })

    (async () => {
        const client = await pool.connect();
        try {
            const res = await pool.query('SELECT * FROM users WHERE id = $1', [1]);
            console.log(res.rows[0]);
        } finally {
            client.release();
        }
    })().catch(e => console.log(e.stack));

    // const client = new Client({
    //     connectionString: connectionString,
    // })
    // client.connect()

    // client.query('SELECT NOW()', (err, res) => {
    //     console.log(err, res)
    //     client.end()
    // })
} else {
    const pool = new Pool({
        user: 'zackfanning',
        host: 'localhost',
        database: 'social_network',
        password: 'harrier',
        port: 5432,
    });

    (async () => {
        const client = await pool.connect();
        try {
            const res = await pool.query('SELECT * FROM users WHERE id = $1', [1]);
            console.log(res.rows[0]);
        } finally {
            client.release();
        }
    })().catch(e => console.log(e.stack));

    // const client = new Client({
    //     user: 'zackfanning',
    //     host: 'localhost',
    //     database: 'social_network',
    //     password: 'harrier',
    //     port: 5432,
    // })

    // client.connect()

    // client.query('SELECT NOW()', (err, res) => {
    //     console.log(err, res)
    //     client.end()
    // })
}