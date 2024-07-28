const express = require('express')
const router = express.Router()

router.get("/", __dirname + 'home.html')
router.get("/About", (__dirname + 'about.html'))

module.exports = router