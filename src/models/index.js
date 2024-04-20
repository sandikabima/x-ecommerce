const db = require('../utils/conn')
const {hashPassword} = require('../helpers/bcrypt')
const User = require('../models/user')
const Product = require('../models/product')
const Cart = require('../models/cart')

const user = db.define("User", User, {
    hooks : {
        beforeCreate(user){
            user.role = 'costumer'
            user.password = hashPassword(user.password)
        }
    }
}, {tableName : "user"})

const product = db.define("Product", Product, {tableName : "Product"})

const cart = db.define("Cart", Cart, {
    hooks : {
        beforeCreate(cart){
            cart.quantity = 1,
            cart.status = "cart"
        }
    }
}, {tableName : "cart"})

user.hasMany(cart, {
    foreignKey : "userId",
    onDelete : "RESTRICT",
    onUpdate : "RESTRICT"
})

product.hasMany(cart, {
    foreignKey : "productId",
    onDelete : "RESTRICT",
    onUpdate : "RESTRICT"
})

cart.belongsTo(user, {
    foreignKey : "userId",
    onDelete : "RESTRICT",
    onUpdate : "RESTRICT"
})

cart.belongsTo(product, {
    foreignKey : "productId",
    onDelete : "RESTRICT",
    onUpdate : "RESTRICT"
})

db.sync()

module.exports = {user, product, cart}