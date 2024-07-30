const express = require('express')
const tasks = require('../tasks.json')
const fs = require('fs')

const readFileFunc = () => {
   try {
    const jsonTasks = fs.readFile("tasks.json", "utf-8");
    tasks = JSON.parse(jsonTasks);
    return tasks;
   } catch (error) {
        console.log(error);
   }
}

const writeFileFunc = () => {
    fs.writeFile("tasks.json", JSON.stringify(tasks), "utf-8", (err) => {
        if(err) return console.log(err);
        console.log("task written");
    });
}

module.exports = {
    readFileFunc,
    writeFileFunc
}