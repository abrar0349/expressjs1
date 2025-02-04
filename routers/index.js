const express = require('express')
const router = express.Router()
const multer = require('multer')


const storage = multer.diskStorage({
    destination : function (req , file , cb){
        cb(null , './uploads')
    },
    filename : function (req , file , cb){
        cb(null , `${Date.now()}-${file.originalname}`)
    }
}) 
const upload = multer({ storage })

router.post('/fileuplaod', upload.single('profileImage'),(req , res) => {
res.send('pic uploaded successfully')
})



router.get('/getmethod',(req , res) => res.send('Hello guys how are you'))

module.exports =  router