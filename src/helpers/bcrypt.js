const bcrypt = require('bcrypt')

function hashPassword(pass){
    return bcrypt.hashSync(pass, 8)
}

function comparePassword(pass, encryptedPassword){
    return bcrypt.compareSync(pass, encryptedPassword)
}

module.exports = {hashPassword, comparePassword}