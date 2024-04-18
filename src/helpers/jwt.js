const jwt = require("jsonwebtoken")
require('dotenv').config()

const JWT_SECRET = process.env.JWT_SECRET

function generateToken(payload){
    return jwt.sign(payload, JWT_SECRET)
}

function verifyToken(token){
    return jwt.verify(token, JWT_SECRET)
}

module.exports = {generateToken, verifyToken}