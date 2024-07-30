const express = require('express')
const {readFileFunc, writeFileFunc} = require('../models/tasksModel.js')
const  tasks = require('../tasks.json')

const getAllTasks = (req, res) => {
    
    res.json(tasks)
}

const getTask = (req, res) => {
    const { id } = req.params
    const task = tasks.find((item)=> item.id == id)

    if(!task) return res.status(404).json({msg: 'task not found'})
        res.json(task)
}

const createTask = (req, res) => {
    
    const myTask = {
        ...req.body,
        id: tasks.length + 1,
        title: req.body.title,
        task: req.body.execute,
        time: req.body.time
    }

    tasks.push(myTask)
    writeFileFunc(tasks)
    res.sendStatus(201)
}

const updateTask = (req, res) => {
    const { id } = req.params
    const index = tasks.findIndex((item)=> item.id == id);

    const myTask = {
        ...req.body,
        id: tasks[index],
        title: req.body.title,
        task: req.body.execute,
        time: req.body.time
    }

    tasks.push(myTask)
    writeFileFunc(tasks)
    res.json(tasks)
}

const deleteTask = (req, res) => {
    const { id } = req.params
    const index = tasks.findIndex((item)=> item.id == id);

    if(index === -1){
        res.status(404).send(`task not found`)
    }

   tasks.splice(index, 1)
    writeFileFunc(tasks)
    res.json(tasks)
}



module.exports = {
    getAllTasks,
    getTask,
    createTask,
    updateTask,
    deleteTask
}