const {Sequelize} = require('sequelize')

const cart = {
    productId : Sequelize.INTEGER,
    userId : Sequelize.INTEGER,
    quantity : Sequelize.INTEGER,
    status : Sequelize.STRING
}

module.exports = cart