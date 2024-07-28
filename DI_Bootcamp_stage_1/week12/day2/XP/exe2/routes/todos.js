const express =require('express')
const chalk = require('chalk')
const  {getAllTodoData } = require('../controllers/getAllTodoData.js')
const router = express.Router()
const { todoData } = require('../data/todoData.js')

router.get("/todoData", getAllTodoData)

module.exports = router