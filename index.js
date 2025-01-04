const express = require('express')
// const router = require('./routers')



const app = express()

// app.use(router)
app.get('/getmethod', (req, res) => res.send('Hello World!'))



app.listen(3000, () => console.log('Server ready'))

