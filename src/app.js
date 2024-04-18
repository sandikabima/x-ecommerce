const express = require('express')
const app = express()
const port = 3000
const router = require('./router')

const bodyParser = require('body-parser')

app.use(bodyParser.json())

app.use(express.json())

app.use('/', router)

app.listen(port, ()=>{
    console.log('Exam listening at port', port)
})