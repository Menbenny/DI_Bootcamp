import { db } from "../config/db.js";

export const _register = (email, password) => {
    return db("usera").insert({ email, password }, ["id", "email"]);
};

export const _login = (email) => {
    return db('usera')
    .select('id', 'email', 'password')
    .where({email})
}