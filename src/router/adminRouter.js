const express = require('express')
const routerAdmin = express.Router()
const adminController = require('../controllers/adminController')



routerAdmin.post('/products', adminController.addPost)
routerAdmin.get('/products', adminController.getAll)


module.exports = routerAdmin