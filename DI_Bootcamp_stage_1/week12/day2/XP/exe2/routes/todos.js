const express =require('express')
const chalk = require('chalk')
const  {getAllTodoData, updateTodo, todoDelete } = require('../controllers/getAllTodoData.js')
const router = express.Router()
const { todoData } = require('../data/todoData.js')

router.get("/todos", getAllTodoData)
router.post("/todos", createTodo)
router.put("/todo", updateTodo)
router.delete("/todo", todoDelete)

module.exports = router