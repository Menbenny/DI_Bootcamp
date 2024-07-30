const express = require('express')
const router = express.Router();

post('/register', userRegister)
// ? Link credentials params in loginFunc
post('/login:credentials', userLogin)
get('/users/:id', getUserID)
put('/users/:id', updateUser)

module.exports = router