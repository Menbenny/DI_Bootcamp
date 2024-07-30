const express = require('express')
const userData = require('../userData.json')
const fs = require('fs')

module.exports = {
    readJSONFile: () => {
        try {
            const response = fs.readFile("userData.json", "utf-8")
            const userData = JSON.parse(response)
            return userData
        } catch (error) {
            console.log(error);
        }
    },
    writeJSONFile: () => {
        fs.writeFile("userData.json", "utf-8")
    }
}
