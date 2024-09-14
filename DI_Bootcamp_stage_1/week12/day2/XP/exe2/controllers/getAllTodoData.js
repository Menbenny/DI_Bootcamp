const { todoData } = require('../data/todoData')


// ! GET
const getAllTodoData = (req, res) => {
//    const { id } = req.params;
   res.json(todoData)
}

//! POST
const  createTodo = (req, res) => {
    const { task, time, taskHandler } = req.body;

    const newTodo = {
        id: todoData.length + 1,
        task: task,
        time: time,
        taskHandler: taskHandler
    }


    todoData.push(newTodo);
    res.status(201).json(newTodo);
}

//! PUT
const updateTodo = (req, res) => {
   const { id } = req.params;
   const { task, time, taskHandler} = req.body;

   const todoIndex = todoData.findIndex(item => item.id == id);

   if (todoIndex === -1) {
    return res.status(404).send(`Todo with id ${id} not found`);
   }

   const updatedTodo = {
    ...todoData[todoIndex],
    task: task,
    time: time,
    taskHandler: taskHandler
   };

   todoData[todoIndex] = updateTodo;
}

// ! Delete
const todoDelete = (req, res) => {
    const { id } = req.params;

    const index = todoData.findInex((item)=> item.id == id)

    if(!index) {
        res.status(404).send(`Product not found`)
    }

    const deletedTodo = todoData.splice(index, 1);

    res.json(deletedTodo);
}

module.exports = {
    updateTodo,
    createTodo,
    getAllTodoData,
    todoDelete
}