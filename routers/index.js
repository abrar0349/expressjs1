const express = require('express')
const router = express()

router.get('/getmethod', (req, res) => res.send('Hello World!'))


module.exports =  router