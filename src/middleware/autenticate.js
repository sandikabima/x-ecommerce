const {verifyToken} = require('../helpers/jwt')
const {user} = require('../models')

const autenticate = ( async (req, res, next) =>{
    try {
        const {access_token} = req.headers
        if (!access_token){
            return res.status(404).json({message : 'Invalid Token'})
        } else {
            const decoded = verifyToken(access_token)
            let data = await user.findOne({
                where : {
                    email : decoded.email
                }
            })
            if (data) {
                req.loggedUser = {
                    id : decoded.id,
                    email : decoded.email,
                    role : decoded.role
                }
            }
            next()
        }
    } catch (error) {
        return res.status(404).json({message : 'Invalid Token'})
    }
})


module.exports = autenticate