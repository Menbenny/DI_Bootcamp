const { todoData } = require('../data/todoData')


// ! GET
const getAllTodoData = (req, res) => {
//    const { id } = req.params;
   res.json()
}

//! PUT
const updateTodo = (req, res) => {
    const {task, time, taskHandler} = req.body

    const newEntry = {
        ...req.body,
        task: task,
        time: time,
        taskHandler: taskHandler
    }

    todoData.push(newEntry)
    res.json()
}

// ! Delete
const todoDelete = (req, res) => {
    const { id } = req.body
    const index = todoData.findInex((item)=> item.id == id)

    if(!index) {
        res.status(404).send(`Product not found`)
    }

    todoData.splice(index, 1)
    res.json()
}

module.exports = {
    updateTodo,
    getAllTodoData,
    todoDelete
}