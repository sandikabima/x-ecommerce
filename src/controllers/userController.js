const User = require('../models/user')
const response = require('../helpers/respon')


class userController{
    static async postRegister (req,res){
        try {
            const {email, password} = req.body
            let cekData = await User.findOne({
                where : {
                    email : email
                }
            })
           if (cekData){
            return res.status(409).json({message : "Email is registered"})
           } else {
            let data = await User.create({
                email : email,
                password : password
            })
            return response(200, data, 'Registrasi successfully', res)
           }
        } catch (error) {
            return res.status(400).json({message : "Invalid Request"})
        }
    }

    static postLogin(){
        
    }

}

module.exports = userController