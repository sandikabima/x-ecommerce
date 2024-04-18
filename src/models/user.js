const {DataTypes, Model} = require('sequelize')
const sequelize = require('../utils/conn')
const {hashPassword} = require('../helpers/bcrypt')


class User extends Model{}

User.init({
    id : {
        type : DataTypes.INTEGER,
        primaryKey : true,
        autoIncrement : true,
        allowNull : false
    },
    email : {
        type : DataTypes.STRING,
        allowNull : false
    },
    password : {
        type : DataTypes.STRING,
        allowNull : false
    },
    role : {
        type : DataTypes.STRING,
    }

},{ hooks : {
    beforeCreate(user){
        user.role = 'costumer'
        user.password = hashPassword(user.password)
    }
}, sequelize, tableName : 'users' })

sequelize.sync()

module.exports = User