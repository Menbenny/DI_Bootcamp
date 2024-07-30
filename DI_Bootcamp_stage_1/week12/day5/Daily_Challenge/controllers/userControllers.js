const express = require('express')
const userData = require('../userData.json')

const userRegister = (req, res) => {
    res.json()
}

const userLogin = (req, res) => {
    
}

const getUserID = (req, res) => {
    const { id } = req.params
                                    // !
    const index = userData.find((item) item.id == id)
}

const updateUser = (req, res) => {
    
}


module.exports = {
    userRegister,
    userLogin,
    getUserID,
    updateUser
}