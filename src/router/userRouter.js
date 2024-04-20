const express = require('express')
const routerUser = express.Router()
const Controller = require('../controllers/userController')
const autenticate = require('../middleware/autenticate')
const {userAuthor} = require('../middleware/userAuthor')


routerUser.post('/register', Controller.postRegister)


routerUser.use('/cart', autenticate, userAuthor)
routerUser.post('/cart', Controller.postCart)
routerUser.get('/cart', Controller.getCart)
routerUser.patch('/cart/:id', Controller.patchCart)
routerUser.delete('/cart/:id', Controller.deleteCart)

module.exports = routerUser