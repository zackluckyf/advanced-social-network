let db = require('./pool');

let getUser = async (userId: number) => {
    const client = await db.pool.connect();
    try {
        let res = db.pool.query('SELECT * FROM users WHERE id = $1', [userId]);
        return res;
    } catch(e) {
        e => console.log(e.stack)
    } finally {
        client.release();
    }
}

module.exports = {
  getUser: getUser
};