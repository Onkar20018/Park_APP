const express = require('express')

const router = express.Router();

const {CreateUser} = require("./controller")
router.post('/posted',CreateUser)


module.exports= router