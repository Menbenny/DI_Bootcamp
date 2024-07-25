const express = require('express')
const { users } = require('../config/data.js');
const { getOneUser, getAllUsers } = require('../controllers/usersControllers.js');

const router = express.Router()

// call users and display as json

router.get("/", getAllUsers)
router.get("/:id", getOneUser)



// router.get("/users", (req, res) => {
//   let users = [
//     { name: "John", age: 401 },
//     { name: "Anne", age: 45 },
//     { name: "Marry", age: 21 },
//   ];
//   //   res.status(404).json(users);
//   res.sendStatus(404);
// });

// router.post("/users", (req, res) => {
//   res.send("hello form users route 1 ");
// });


module.exports = router
