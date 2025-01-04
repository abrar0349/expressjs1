const express = require('express')
const router = express.Router()


router.get('/getmethod',(req , res) => res.send('Hello guys how are you'))

module.exports =  router