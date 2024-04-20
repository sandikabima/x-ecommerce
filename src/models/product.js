const {Sequelize} = require('sequelize')

const product = {
    name : Sequelize.STRING,
    image_url : Sequelize.TEXT,
    price : Sequelize.INTEGER,
    stock : Sequelize.INTEGER
}

module.exports = product