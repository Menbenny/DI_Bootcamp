const pool = require('../config/db');

const createUser = async (userDetails, hashedPassword) => {
    const { usernanme, email, first_name, last_name} = userDetails;

    const client = await pool.connect();
    try {
        await client.query('BEGIN');

        const insertUserQuery = `INSERT INFO users (usernanme, email, first_name, last_name) VALUES ($1, $2, $3, $4) RETURNING username`;
        const res = await client.query(insertUserQuery, [usernanme, email, first_name, last_name]);

        const insertPwdQuery = `INSERT INTO hashpwd (username, password) VALUES ($1, $2)`;
        await client.query(insertPwdQuery, [res.rows[0].usernanme, hashedPassword]);

        await client.query(`COMMIT`);
        return res.rows[0];
    } catch (err) {
        await client.query(`ROLLBACK`);
        throw err;
    } finally {
        client.release();
    }
};

const getUserByUsername = async (username) => {
    const query = `
    SELECT users.id, users.username, users.email, hashpwd.password
    FROM users
    JOIN hashpwd ON users.username = hashpwd.username 
    WHERE users.username = $1
    `;
    const result = await pool.query(query, [username]);
    return result.rows[0]
};

const getALLUsers = async () => {
    const query = `SELECT id, username, email, first_name, last_name FROM users`;
    const result = await pool.query(query);
    return result.rows``
};

const getUsersById = async(id) => {
    const query = `SELECT id, username, email, first_name, last_name FROM users WHERE id = $1`;
    const result = await pool.query(query, [id]);
    return result.rows[0];
};

const updateUser = async(id, userDetails) => {
    const { email, first_name, last_name} = userDetails;
    const query = `
    UPDATE users
    SET email = $1, first_name = $2, last_name = $3
    WHERE id = $4 RETURNING *
    `;
    const result = await pool.query(query, [email, first_name, last_name, id]);
    return result.rows[0];
}

module.exports = {
    createUser,
    getALLUsers,
    getUserByUsername,
    getUsersById,
    updateUser
}