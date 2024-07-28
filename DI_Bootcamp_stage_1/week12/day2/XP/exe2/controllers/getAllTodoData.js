const { todoData } = require('../data/todoData')
const getAllTodoData = (req, res) => {
//    const { id } = req.params;
   res.json()
}

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

module.exports = {
    updateTodo,
    getAllTodoData
}