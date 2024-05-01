const express = require('express')
const app = express()
const router = require('./router')
require('dotenv').config()

const bodyParser = require('body-parser')

app.use(bodyParser.json())

app.use(express.json())

app.get("/health", (req, res) => {
    res.send('coba')
})


app.use('/', router)

app.listen(process.env.PORT, ()=>{
    console.log('Exam listening at port', process.env.PORT)
})