const express = require('express')
const routerAdmin = express.Router()
const adminController = require('../controllers/adminController')
const autenticate = require('../middleware/autenticate')
const adminAuthor = require('../middleware/adminAuthor')



routerAdmin.get('/products', adminController.getAll)
routerAdmin.get('/products/:id', adminController.getById)


routerAdmin.use('/products',autenticate, adminAuthor)
routerAdmin.post('/products', adminController.addPost)
routerAdmin.delete('/products/:id', adminController.delete)
routerAdmin.put('/products/:id', adminController.put)


module.exports = routerAdmin