const {DataTypes, Model} = require('sequelize')
const sequelize = require('../utils/conn')

class Product extends Model{}

Product.init({
    name : DataTypes.STRING,
    image_url : DataTypes.TEXT,
    price : DataTypes.INTEGER,
    stock : DataTypes.INTEGER
}, {sequelize, tableName : 'Product'})

sequelize.sync()

module.exports = Product