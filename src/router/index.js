const express = require('express')
const router = express.Router()
const userRouter = require('../router/userRouter')
const adminRouter = require('../router/adminRouter')
const autenticate = require('../middleware/autenticate')
const adminController = require('../controllers/adminController')
const userController = require('../controllers/userController')
const adminAuthor = require('../middleware/adminAuthor')

router.post('/login', adminController.postLogin)
router.post('/register', userController.postRegister)

router.use('/products',autenticate, adminAuthor)
router.use(adminRouter)
router.use(userRouter)


module.exports = router