const express = require('express')
const router = require('./routers')



const app = express()

app.use(express.urlencoded({extended : false}))
app.use('/api',router)




app.listen(3000, () => console.log('Server ready'))

